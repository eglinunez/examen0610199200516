var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var dummyStore = [];
var dummyData = {
  cuenta:"120630023",
  nombre:"Orlando J Betancourth",
  correo:"obetancourthunicah@gmail.com",
  curso:"Seminario de Software"
}
router.get('/suma',function(req,res,next){
  res.render('suma',{})
});
  router.post('/suma',function(req,res,next){
  console.log(req.body);
  var newLugar =Object.assign({},plantillaLugar);
  newLugar.nombre=req.body.txtNombre;
  newLugar.depto=req.body.txtDepto;
  newLugar.dist=req.body.txtDist;
  newLugar.reco=req.body.txtReco;
  newLugar.fchIngreso=new Date().getTime();
  almacenLugar.push(newLugar);
  console.log(almacenLugar);
  var data =Object.assign({},req.body);
  data.lugar = almacenLugar;
  res.render('turistico',data);
});

router.get('/api/alumnos/:alumcod',
  function(req,res,next){
      var returnAlumno = dummyStore.filter(function(cAlm, i){
        return cAlm.cuenta === req.params.alumcod;
      });
      res.json(returnAlumno);
  }
 );
 router.get('/api/alumnos/find/all',
   function(req,res,next){
       res.json(dummyStore);
   }
  );
module.exports = router;
