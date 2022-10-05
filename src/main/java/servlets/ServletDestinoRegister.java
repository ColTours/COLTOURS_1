package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controller.DestinoController;

/**
 * Servlet implementation class ServletUsuarioRegister
 */
@WebServlet("/ServletDestinoRegister")
public class ServletDestinoRegister extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletDestinoRegister() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        DestinoController destino = new DestinoController();

        //String id_usuario = request.getParameter("id_usuario");
        //String usuarioStr = usuario.pedir(id_usuario);
        //PrintWriter out = response.getWriter();
        //out.println(usuarioStr);
        //out.flush();
        //out.close();
        
        
        int id_destino = Integer.parseInt(request.getParameter("id_destino"));
        String planes = request.getParameter("planes");
        double precio = Double.parseDouble(request.getParameter("precio"));
        String ciudad = request.getParameter("ciudad");
        
        //double saldo = Double.parseDouble(request.getParameter("saldo"));
        //boolean premium = Boolean.parseBoolean(request.getParameter("premium"));

        String result = destino.registerPlan(id_destino, planes, precio, ciudad );

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println(result);
        out.flush();
        out.close();
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}