<?php
/**
 * Template Name: Quote
 *
 * Description: Página principal del Quote de Freeway The Auto Insurance Experts
 *
 * @package WordPress
 * @subpackage Freeway
 * @since Freeway
 */

get_header(quote); ?>

	<article id="primary-quote" class="site-content">
		<ul class="progress">
            <li class="active"><span class="number">1</span><p>Vehicle</br>information</p></li>
            <li><span class="number">2</span><p>Driver</br>information</p></li>
            <li><span class="number">3</span><p>Coverage</br>options</p></li>
            <li><span class="number">4</span><p class="last">Quote</p></li>
        </ul>

        <div class="quote">
            <h2>1. Vehicle information</h2>
            <p>You can receive an online quote for up to 4 vehicles. For more than 4 vehicles, please contact your local agent.</p>

            <form action="#" name="myform" id="myform" method="post">
                <ul>
                    <li>
                        <span>Year:</span>
                        <select name="pais" class="select">
                            <option value="" selected="selected">1996</option>
                            <option value="">1997</option> 
                            <option value="">1998</option> 
                        </select>
                    </li>

                    <li>
                        <span>Make:</span>
                        <select name="pais" class="select">
                            <option value="" selected="selected">Aston Martin</option>
                            <option value="">Aston Martin</option> 
                            <option value="">Aston Martin</option> 
                        </select>
                    </li>

                    <li>
                        <span>Model:</span>
                        <select name="pais" class="select">
                            <option value="" selected="selected">V8</option>
                            <option value="">V8</option> 
                            <option value="">V8</option> 
                        </select>
                    </li>

                    <li>
                        <span>Body style:</span><input type="text" class="field">
                    </li>

                    <li>
                        <span>Vehicle use:</span>
                        <select name="pais" class="select">
                            <option value="" selected="selected">Commute</option>
                            <option value="">Business</option> 
                            <option value="">Pleasure</option> 
                            <option value="">Farming</option> 
                        </select>
                    </li>

                    <li>
                        <span>Estimated annual mileage:</span><input type="text" class="field">
                    </li>

                    <li>
                        <span>Vehicle status:</span>
                        <select name="pais" class="select">
                            <option value="" selected="selected">Owned</option>
                            <option value="">Lease</option> 
                            <option value="">Financed</option> 
                        </select>
                    </li>

                    <div class="left"></div>
                    <div class="right"><a href="quote2.php" class="next">Next</a></div>
                    <p class="copy">*Todas las secciones requiren respuesta para generar una cotización.</p>
                </ul>
            </form>
        </div>
        <div class="info">
            <h3>Divulgación de información</h3>
            <p>Freeway Insurance Services, Inc. desea darle la cotización más exacta posible para que usted pueda informarse debidamente antes de tomar una decisión. Para hacerlo, puede que usemos información que usted nos haya proporcionado e información incluida en el historial de reclamaciones, el expediente de conducción y en otros informes comerciales. Al hacer clic en CONTINUAR, usted acepta estas normas. Si desea más información, por favor consulte nuestras normas de privacidad.</p>
            <img src="<?php echo get_template_directory_uri();?>/images/secure.png"/>
        </div>
	</article><!-- #primary -->

	<article id="secondary-quote">
		<?php get_sidebar(quote_form); ?>
	</article>

<?php get_footer(); ?>