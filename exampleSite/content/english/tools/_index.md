---
title: "SCIL tools"
subtitle: ""
# meta description
description: "This is meta description"
draft: false
---


## SCIL flows
Most of the SCIL pipelines are based on [Nextflow](https://www.nextflow.io/) pipeline engine and container systems such as [Singularity](https://www.sylabs.io/singularity/) or [Docker](https://www.docker.com/) and we based their name around the suffix flow.


{{< faq "Tractoflow" >}}
[TractoFlow](https://github.com/scilus/tractoflow) is our recommended processing pipeline, starting from raw DWI up to the generation of whole brain tractograms. It is robust, efficient and fully reproducible.
{{</ faq >}}

{{< faq "Rbx_flow" >}}
[Rbx_flow](https://github.com/scilus/rbx_flow) (RecobundlesX) pipeline extracts bundles from a whole brain tractogram. 
{{</ faq >}}

{{< faq "Tractometry_flow" >}}
[Tractometry_flow](https://github.com/scilus/tractometry_flow) pipeline allows you to extract tractometry information by combining subjects's fiber bundles and any metric in diffusion space.
{{</ faq >}}

{{< faq "Connectoflow" >}}
[ConnectoFlow](https://github.com/scilus/connectoflow) is a state-of-the-art structural connectivity (connectomics) pipeline.
{{</ faq >}}

{{< faq "Bst_flow" >}}
[Bst_flow](https://github.com/scilus/bstflow) pipeline allows you to enhance fODFs to run bundle specific tractography.
{{</ faq >}}

{{< faq "Freewater_flow" >}}
[freewater_flow](https://github.com/scilus/freewater_flow) pipeline computes FW-corrected DTI metrics.
{{</ faq >}}

{{< faq "Noddi_flow" >}}
[Noddi_flow](https://github.com/scilus/noddi_flow) pipeline runs the NODDI priors estimation and NODDI modelling pipeline.
{{</ faq >}}

</div>

<br>

## SCIL tools

<div class="row">

{{< faq "Dmriqc_flow" >}}
[Dmriqc_flow](https://github.com/scilus/dmriqc_flow) is our pipeline for diffusion MRI quality check. Using different profiles you'll be able to QC any output from most **scil flows** mentioned above.
{{</ faq >}}

{{< faq "Combine_flows" >}}
[Combine_flows](https://github.com/scilus/combine_flows) is a collection of bash scripts that glues or connects all our flows together. These scripts mostly create a valid input strucuture for a flow, based on the output structure of another flow.  
{{</ faq >}}

{{< faq "Containers" >}}
The SCIL distributes a few containers that can be used to run the [TractoFlow](https://github.com/scilus/tractoflow) pipeline, as well as easily interact with various diffusion MRI focused tools. See the [containers list](https://scil.usherbrooke.ca/pages/containers/) for downloads.
{{</ faq >}}

{{< faq "Scilpy" >}}
[Scilpy](https://github.com/scilus/scilpy/) is a lightweight Diffusion Imaging processing library developed for the needs of members and collaborators of the SCIL. It mainly contains wrappers for [DIPY](http://www.dipy.org/) functionalities, as well as tools not already integrated into Dipy.
{{</ faq >}}

{{< faq "MI-Brain" >}}
The SCIL has contributed to, and highly recommends, [MI-Brain](https://github.com/imeka/mi-brain) as a visualization and interaction tool for Diffusion MRI and neuroimaging datasets.
{{</ faq >}}

</div>

<br>

## SCIL projects
<div class="row">
{{< faq "Tractometer" >}}
The [Tractometer](http://www.tractometer.org/) is our online evaluation system for tractography. It has been used in various challenges. Code of the ISMRM 2015 tractography challenge can be seen [here](https://github.com/scilus/ismrm_2015_tractography_challenge_scoring).
{{</ faq >}}