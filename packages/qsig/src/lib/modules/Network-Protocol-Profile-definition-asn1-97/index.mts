/**
 * @module
 * @description
 *
 * X.680 edition of the network protocol profile (ECMA-165 §11.3.3 Table 29),
 * object identifier `network-protocol-profile-definition-asn1-97(19)`. `acse`
 * (19) or `dse` (32) selects the service APDUs that follow the Facility
 * information element's protocol profile. If the element is absent, those APDUs
 * are ROSE (§11.3.3 NOTE 3, §7.1.2.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./NetworkProtocolProfile.ta.mjs";
