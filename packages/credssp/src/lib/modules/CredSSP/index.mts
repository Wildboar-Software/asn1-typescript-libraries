/**
 * @module
 * @description
 *
 * ASN.1 module `CredSSP` from
 * [MS-CSSP](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/eb475648-7cc5-4690-ad84-c6acae737de9)
 * section 2.2. Tagging is `EXPLICIT TAGS`. Messages are DER
 * ([X.690](https://www.itu.int/rec/T-REC-X.690/en)).
 *
 * {@link TSRequest} is the only PDU. It rides an already
 * established TLS channel; CredSSP does not use TLS client
 * authentication or session resumption. `negoTokens` carries
 * the SPNEGO handshake. `pubKeyAuth` binds that handshake to
 * the server certificate. `authInfo` is the delegated
 * {@link TSCredentials}, encrypted under the SPNEGO key.
 *
 * The client should send credentials only to a server that
 * policy says may receive them. Windows expresses that policy
 * as service principal names.
 * [MS-CSSP, section 3.1.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/3cd79cfc-fc9d-481f-b4be-aee5eaf494aa).
 */
export * from "./NegoData-Item.ta.mjs";
export * from "./NegoData.ta.mjs";
export * from "./TSCredentials.ta.mjs";
export * from "./TSCspDataDetail.ta.mjs";
export * from "./TSPasswordCreds.ta.mjs";
export * from "./TSRemoteGuardCreds.ta.mjs";
export * from "./TSRemoteGuardPackageCred.ta.mjs";
export * from "./TSRequest.ta.mjs";
export * from "./TSSmartCardCreds.ta.mjs";
