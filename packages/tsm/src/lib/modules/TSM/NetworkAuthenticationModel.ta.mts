/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_NetworkAuthenticationModel {
    no_value = 0,
    local_model = 1,
    download_model = 2,
    attached_model = 3,
    center_model = 4,
    ref_onttp_for_local_model = 5,
    ref_onttp_for_center_model = 6,
    comparison_outsourcing_by_client_model = 7,
    comparison_outsourcing_by_server_model = 8,
    storage_comparison_outsourcing_by_client_model = 9,
    storage_comparison_outsourcing_by_server_model = 10,
}

/**
 * @summary NetworkAuthenticationModel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAuthenticationModel  ::=  ENUMERATED {
 * no-value                                        (0), -- no selection --
 * local-model                                     (1),
 * download-model                                  (2),
 * attached-model                                  (3),
 * center-model                                    (4),
 * ref-onttp-for-local-model                       (5),
 * ref-onttp-for-center-model                      (6),
 * comparison-outsourcing-by-client-model          (7),
 * comparison-outsourcing-by-server-model          (8),
 * storage-comparison-outsourcing-by-client-model  (9),
 * storage-comparison-outsourcing-by-server-model  (10),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NetworkAuthenticationModel = _enum_for_NetworkAuthenticationModel | ENUMERATED;

/**
 * @summary NetworkAuthenticationModel_no_value
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_no_value: NetworkAuthenticationModel = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_value
 * @constant
 * @type {number}
 */
export
const no_value: NetworkAuthenticationModel = NetworkAuthenticationModel_no_value; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_local_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_local_model: NetworkAuthenticationModel = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local_model
 * @constant
 * @type {number}
 */
export
const local_model: NetworkAuthenticationModel = NetworkAuthenticationModel_local_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_download_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_download_model: NetworkAuthenticationModel = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary download_model
 * @constant
 * @type {number}
 */
export
const download_model: NetworkAuthenticationModel = NetworkAuthenticationModel_download_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_attached_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_attached_model: NetworkAuthenticationModel = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attached_model
 * @constant
 * @type {number}
 */
export
const attached_model: NetworkAuthenticationModel = NetworkAuthenticationModel_attached_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_center_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_center_model: NetworkAuthenticationModel = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary center_model
 * @constant
 * @type {number}
 */
export
const center_model: NetworkAuthenticationModel = NetworkAuthenticationModel_center_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_ref_onttp_for_local_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_ref_onttp_for_local_model: NetworkAuthenticationModel = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ref_onttp_for_local_model
 * @constant
 * @type {number}
 */
export
const ref_onttp_for_local_model: NetworkAuthenticationModel = NetworkAuthenticationModel_ref_onttp_for_local_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_ref_onttp_for_center_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_ref_onttp_for_center_model: NetworkAuthenticationModel = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ref_onttp_for_center_model
 * @constant
 * @type {number}
 */
export
const ref_onttp_for_center_model: NetworkAuthenticationModel = NetworkAuthenticationModel_ref_onttp_for_center_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_comparison_outsourcing_by_client_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_comparison_outsourcing_by_client_model: NetworkAuthenticationModel = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary comparison_outsourcing_by_client_model
 * @constant
 * @type {number}
 */
export
const comparison_outsourcing_by_client_model: NetworkAuthenticationModel = NetworkAuthenticationModel_comparison_outsourcing_by_client_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_comparison_outsourcing_by_server_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_comparison_outsourcing_by_server_model: NetworkAuthenticationModel = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary comparison_outsourcing_by_server_model
 * @constant
 * @type {number}
 */
export
const comparison_outsourcing_by_server_model: NetworkAuthenticationModel = NetworkAuthenticationModel_comparison_outsourcing_by_server_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_storage_comparison_outsourcing_by_client_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_storage_comparison_outsourcing_by_client_model: NetworkAuthenticationModel = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary storage_comparison_outsourcing_by_client_model
 * @constant
 * @type {number}
 */
export
const storage_comparison_outsourcing_by_client_model: NetworkAuthenticationModel = NetworkAuthenticationModel_storage_comparison_outsourcing_by_client_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkAuthenticationModel_storage_comparison_outsourcing_by_server_model
 * @constant
 * @type {number}
 */
export
const NetworkAuthenticationModel_storage_comparison_outsourcing_by_server_model: NetworkAuthenticationModel = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary storage_comparison_outsourcing_by_server_model
 * @constant
 * @type {number}
 */
export
const storage_comparison_outsourcing_by_server_model: NetworkAuthenticationModel = NetworkAuthenticationModel_storage_comparison_outsourcing_by_server_model; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NetworkAuthenticationModel = $._decodeEnumerated;
export const _encode_NetworkAuthenticationModel = $._encodeEnumerated;


/* eslint-enable */
