/* eslint-disable */
import type { EXTENSION } from "@wildboar/pki-stub";
import { id_pkix_ocsp_service_locator } from "../OCSP-2013-08/id-pkix-ocsp-service-locator.va.mjs";
import {
    ServiceLocator,
    _decode_ServiceLocator,
    _encode_ServiceLocator,
} from "../OCSP-2013-08/ServiceLocator.ta.mjs";


/**
 * @summary re_ocsp_service_locator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * re-ocsp-service-locator EXTENSION ::= { SYNTAX ServiceLocator
 *                                     IDENTIFIED BY
 *                                     id-pkix-ocsp-service-locator }
 * ```
 *
 * @constant
 * @type {EXTENSION<ServiceLocator>}
 * @implements {EXTENSION<ServiceLocator>}
 */
export const re_ocsp_service_locator: EXTENSION<ServiceLocator> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_ServiceLocator,
    },
    encoderFor: {
        "&ExtnType": _encode_ServiceLocator,
    },
    "&id": id_pkix_ocsp_service_locator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
