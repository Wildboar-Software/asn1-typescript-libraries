/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



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

let _cached_decoder_for_NetworkAuthenticationModel: $.ASN1Decoder<NetworkAuthenticationModel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAuthenticationModel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAuthenticationModel (el: _Element): NetworkAuthenticationModel {
    if (!_cached_decoder_for_NetworkAuthenticationModel) { _cached_decoder_for_NetworkAuthenticationModel = $._decodeEnumerated; }
    return _cached_decoder_for_NetworkAuthenticationModel(el);
}

let _cached_encoder_for_NetworkAuthenticationModel: $.ASN1Encoder<NetworkAuthenticationModel> | null = null;

/**
 * @summary Encodes a(n) NetworkAuthenticationModel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAuthenticationModel, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAuthenticationModel (value: NetworkAuthenticationModel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAuthenticationModel) { _cached_encoder_for_NetworkAuthenticationModel = $._encodeEnumerated; }
    return _cached_encoder_for_NetworkAuthenticationModel(value, elGetter);
}


/* eslint-enable */
