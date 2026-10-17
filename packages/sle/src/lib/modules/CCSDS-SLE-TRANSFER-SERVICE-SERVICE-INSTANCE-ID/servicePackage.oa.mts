/* eslint-disable */
import { spack } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/spack.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary servicePackage
 * @description
 * 
 * Service-package attribute. The printable name is `spack`. The value
 * is agreed between the user and the provider.
 * 
 * A service package specifies which service instances are provided,
 * when they are provided, the resources that enable them, and the
 * initial values of the mission-dependent production and provision
 * parameters.
 * 
 * Under service management, the package identifies the antenna, the
 * space link and transfer service configuration, and the time span of
 * one space link session, or the transfer service configuration and
 * time span of one retrieval transfer instance.
 * 
 * CCSDS 911.1-B-5, sections A2.4 and 2.6.2. CCSDS 910.11-B-1,
 * section 2.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * servicePackage ATTRIBUTE ::= {  ID spack }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const servicePackage: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": spack /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
