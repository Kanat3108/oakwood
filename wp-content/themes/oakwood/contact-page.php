<?php
/**
 * Template name: contact-page
 *
 */

get_header();

?>
<section class="c-s1">
	<div class="container">
		<?php 
		$contact_title = get_post_meta($post->ID, 'contact_title_title', true) ? get_post_meta($post->ID, 'contact_title_title', true) : ''; 
		?>
		<h2 class="h2-all"><?php echo $contact_title ?></h2>
		<div class="row">
			<div class="col-md-6">
				<?php echo do_shortcode(get_post_meta($post->ID, 'contact_form_shortcode', true)) ?>
			</div>
			<div class="col-md-6">
				<div class="cs1-office">
					<?php 
					$contact_adress_title = get_post_meta($post->ID, 'contact_adress_title', true) ? get_post_meta($post->ID, 'contact_adress_title', true) : '';
					$contact_adress_desc = get_post_meta($post->ID, 'contact_adress_desc', true) ? get_post_meta($post->ID, 'contact_adress_desc', true) : '';  
					?>
					<h3><i class="fa fa-map-marker" aria-hidden="true"></i><?php echo $contact_adress_title ?></h3>
					<?php echo $contact_adress_desc; ?>
				</div>
				<div class="cs1-bussines">
					<?php 
					$contact_hours_title = get_post_meta($post->ID, 'contact_hours_title', true) ? get_post_meta($post->ID, 'contact_hours_title', true) : '';
					$contact_hours_desc = get_post_meta($post->ID, 'contact_hours_desc', true) ? get_post_meta($post->ID, 'contact_hours_desc', true) : '';  
					?>
					<h3><i class="fa fa-clock-o" aria-hidden="true"></i><?php echo $contact_hours_title ?></h3>
					<?php echo $contact_hours_desc ?>
					<a href="#to-down" class="to-down" >Show the map for better orientation</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="c-s2"  >
	<div class="container">
		<div class="row">
			<?php 
			echo $contact_map_maps = get_post_meta($post->ID, 'contact_map_maps', true) ? get_post_meta($post->ID, 'contact_map_maps', true) : ''; 
			?>
		</div>
	</div>
</section>


<!-- #main -->

<?php
//get_sidebar();
get_footer();
