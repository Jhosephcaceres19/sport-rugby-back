/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package lista;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.swing.JOptionPane;


public class Interfaaz extends javax.swing.JFrame {

    private Connection conexion;
    
    public Interfaaz() {
        initComponents();
        conexion = Postgres.getConnection();
    }

    @SuppressWarnings("unchecked")
    
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        frutas_lbl = new javax.swing.JLabel();
        agregar_btn = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        deporte_txt = new javax.swing.JTextField();
        popularidad_txt = new javax.swing.JTextField();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(255, 255, 255));

        jPanel1.setBackground(new java.awt.Color(153, 153, 153));

        frutas_lbl.setText("Deporte :");

        agregar_btn.setText("Agregar");
        agregar_btn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                agregar_btnActionPerformed(evt);
            }
        });

        jLabel1.setText("Popularidad :");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(16, 16, 16)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(jLabel1)
                                .addGap(24, 24, 24)
                                .addComponent(popularidad_txt))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(frutas_lbl)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 45, Short.MAX_VALUE)
                                .addComponent(deporte_txt, javax.swing.GroupLayout.PREFERRED_SIZE, 144, javax.swing.GroupLayout.PREFERRED_SIZE))))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(82, 82, 82)
                        .addComponent(agregar_btn)))
                .addContainerGap(28, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(63, 63, 63)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(frutas_lbl)
                    .addComponent(deporte_txt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(25, 25, 25)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1)
                    .addComponent(popularidad_txt, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 18, Short.MAX_VALUE)
                .addComponent(agregar_btn)
                .addGap(27, 27, 27))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(47, 47, 47)
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(72, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(36, 36, 36)
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(64, Short.MAX_VALUE))
        );

        pack();
    }

    private void agregar_btnActionPerformed(java.awt.event.ActionEvent evt) {
        if(!deporte_txt.getText().isEmpty() && !popularidad_txt.getText().isEmpty()){
            try {
        
                String deporte = deporte_txt.getText();
                String popular = popularidad_txt.getText();
                int fama = Integer.parseInt(popular);
                boolean existePopularidad = false;
                boolean existeDeporte = false;
        
                PreparedStatement comprobarDep = conexion.prepareStatement("SELECT * FROM dep WHERE deporte = ?");
                comprobarDep.setString(1, deporte);
                ResultSet resultadoDep = comprobarDep.executeQuery();
                
                if (resultadoDep.next()) {
                    existeDeporte = true;
                    JOptionPane.showMessageDialog(null,"Ya existe ese deporte","Error",JOptionPane.ERROR_MESSAGE);
                }
                
                                
                PreparedStatement comprobarPop = conexion.prepareStatement("SELECT * FROM dep WHERE popularidad = ?");
                comprobarPop.setInt(1, fama);
                ResultSet resultadoPop = comprobarPop.executeQuery();
                
                if (resultadoPop.next()){
                    existePopularidad = true;
                    JOptionPane.showMessageDialog(null, "Ya existe esa popularidad", "Error", JOptionPane.ERROR_MESSAGE);
                }               
                
                if(!existeDeporte && !existePopularidad){
                
                    PreparedStatement insertar = conexion.prepareStatement("INSERT INTO dep (deporte, popularidad) VALUES (?, ?)");
                    insertar.setString(1, deporte);
                    insertar.setInt(2,fama);
                    insertar.executeUpdate();
            
                    JOptionPane.showMessageDialog(null, "Deporte añadido con éxito","ÉXITO",JOptionPane.INFORMATION_MESSAGE);
                }
                
            } catch(NumberFormatException e){
                JOptionPane.showMessageDialog(null, "La popularidad debe ser un número válido.","Error", JOptionPane.ERROR_MESSAGE);
            } catch(SQLException e){
                JOptionPane.showMessageDialog(null,"Error en la base de datos: " + e.getMessage(),"Error",JOptionPane.ERROR_MESSAGE);
            }
        } else {
            JOptionPane.showMessageDialog(null,"Ingrese un deporte con su popularidad",null,JOptionPane.WARNING_MESSAGE);
        }
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Interfaaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Interfaaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Interfaaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Interfaaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        

        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Interfaaz().setVisible(true);
            }
        });
    }

    private javax.swing.JButton agregar_btn;
    private javax.swing.JTextField deporte_txt;
    private javax.swing.JLabel frutas_lbl;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTextField popularidad_txt;
}
