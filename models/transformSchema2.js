
const mongoose = require('mongoose');

var Schema=mongoose.Schema
var transformSchema = new Schema({
    project_id: { type: String, required: true, unique: true },
    project_percentage: { type: Number },
    project_details: {
        project_nr: { type: String, required: true, unique: true },
        project_name: { type: String, required: true },
        parent_project: { type: String, required: false },
        customer: { type: String, required: true },
        project_type: { type: String, required: false },
        project_status: { type: String, required: true },
        start_date: { type: Date, required: true },
        delivery_date: { type: Date, required: true },
        project_budget_hours: { type: Number, required: false },
        project_budget: { type: String, required: false },
        description: { type: String, required: false },
        project_executives: { type: Array, required: false },
        project_manager: { type: String, required: false },
        project_it_head: { type: String, required: false }

    },
   
            application_id: { type: Number, required: true, unique: true },
            average_application_percentage: { type: Number, required: false },

            general_attributes: {

                name: { type: String, required: false },
                description: { type: String, required: false },
                lob: { type: String, required: false },
                business_function: { type: String, required: false },
                owner: { type: String, required: false },
                business_critically: { type: Number, required: false },
                application_age: { type: String, required: false },
                planned_decommission_date: { type: Date, required: false },
                functional_complexity: { type: Number, required: false },
                functional_fitment: { type: Number, required: false },
                operating_knowledge: { type: String, required: false },
                ui_type: { type: String, required: false },
                country_of_usage: { type: String, required: false },
                languages_supported: { type: String, required: false },
                user_type: { type: String, required: false },
                no_of_users: { type: Number, required: false },
                expected_user_growth: { type: String, required: false },
                usability_index: { type: Number, required: false },
                application_documentation: { type: String, required: false },
                os: { type: String, required: false },
                deployment_type: { type: String, required: false },
                production_release_frequency_per_year: { type: String, required: false },
                vendor_dependency: { type: String, required: false },
                completion_percentage: { type: Number, required: false }

            },

            integration_attributes: {
                no_of_integrations: { type: Number, required: false },
                no_of_point_to_point_Integrations: { type: Number, required: false },
                no_of_middleware_based_Integartions: { type: Number, required: false },
                no_of_api_per_services_exposed: { type: Number, required: false },
                percent_of_functionality_avaiable_as_api: { type: Number, required: false },
                affinity_score: { type: Number, required: false },
                completion_percentage: { type: Number, required: false },


            },

            ticket_attributes: {
                ticket_attributes: { type: String, required: false },
                total_no_of_tickets: { type: Number, required: false },
                no_of_crs: { type: Number, required: false },
                no_of_bug_fixes: { type: Number, required: false },
                completion_percentage: { type: Number, required: false },

            },

            application_type:[
            {
                custom_applications_attributes: {
                    selected: { type: Boolean, required: false },
                    ui_dev_language: { type: String, required: false },
                    ui_library_framework_with_version: { type: String, required: false },
                    application_layer_dev_language: { type: String, required: false },
                    application_layer_library_framework_with_version: { type: String, required: false },
                    application_layer_products_with_version: { type: String, required: false },
                    middleware_with_version: { type: String, required: false },
                    storage_type: { type: String, required: false },
                    storage_product_and_version: { type: String, required: false },
                    persistence_database_framework_with_version: { type: String, required: false },
                    scm_tool: { type: String, required: false },
                    completion_percentage: { type: Number, required: false }

                }

            },
            {
                package_attributes: {
                    selected: { type: Boolean, required: false },
                    name: { type: String, required: false },
                    package: { type: String, required: false },
                    description: { type: String, required: false },
                    vendor: { type: String, required: false },
                    competion_percentage: { type: Number, required: false }
                }
            }
            ],

            classification_attributes: {
                pace_layer_category: { type: String, required: false },
                four_rs: { type: String, required: false },
                completion_percentage: { type: Number, required: false }

            },

            scores: {

                optimize_scores: {
                    os_stability: { type: Number, required: false },
                    os_maturity: { type: Number, required: false },
                    os_availibility_score: { type: Number, required: false },
                    os_scalability_score: { type: Number, required: false },
                    os_cloud_applicabilty_score: { type: Number, required: false },
                    os_current_cloud_score: { type: Number, required: false },
                    os_redundency_score: { type: Number, required: false },
                    os_license_optimization_score: { type: Number, required: false },
                    os_consolidation_score: { type: Number, required: false },
                    os_technical_debt_score: { type: Number, required: false },
                    os_competion_percentage: { type: Number, required: false }

                },
                digitalize_scores: {
                    ds_straight_through_processing_adoption_score: { type: Number, required: false },
                    ds_api_applicability_score: { type: Number, required: false },
                    ds_current_api_adoption_score: { type: Number, required: false },
                    ds_technology_obsolecence: { type: Number, required: false },
                    ds_mobility_enablement_scope: { type: Number, required: false },
                    ds_current_mobility_adoption_level: { type: Number, required: false },
                    ds_self_service_adoption: { type: Number, required: false },
                    ds_competion_percentage: { type: Number, required: false }
                },
                expedite_scores: {
                    es_testing_automation_adoption: { type: Number, required: false },
                    es_devops_applicability_score: { type: Number, required: false },
                    es_current_dev_ops_adoption_score: { type: Number, required: false },
                    es_competion_percentage: { type: Number, required: false }
                },
                monetize_scores: {
                    ms_unique_functionality: { type: Number, required: false },
                    ms_registered_as_ip: { type: Number, required: false },
                    ms_current_roi_realization_model: { type: String, required: false },
                    ms_market_potential: { type: Number, required: false },
                    ms_ease_of_monetization: { type: String, required: false },
                    ms_monetization_model: { type: String, required: false },
                    ms_competion_percentage: { type: Number, required: false }
                },
                innovation_scores: {
                    is_ai_or_ml_applicability: { type: String, required: false },
                    is_chat_bot_applicability: { type: String, required: false },
                    is_rpa_applicability_score: { type: String, required: false },
                    is_block_chain_applicability_score: { type: String, required: false },
                    is_competion_percentage: { type: String, required: false }
                },
                others: {
                    lti_owner: { type: String, required: false },
                    redundant_application_name: { type: String, required: false },
                    impact_of_downtime: { type: String, required: false },
                    tco_score: { type: Number, required: false },
                    devlopement_methodology: { type: String, required: false }
                }
            
        


}
    
})

// var applicationSchema = new Schema(
//      )


module.exports = mongoose.model('project', transformSchema);