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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MId, _decode_MId, _encode_MId } from "../MEDIA-GATEWAY-CONTROL/MId.ta.mjs";
// export { MId, _decode_MId, _encode_MId } from "../MEDIA-GATEWAY-CONTROL/MId.ta.mjs";
import { ServiceChangeAddress, _decode_ServiceChangeAddress, _encode_ServiceChangeAddress } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeAddress.ta.mjs";
// export { ServiceChangeAddress, _decode_ServiceChangeAddress, _encode_ServiceChangeAddress } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeAddress.ta.mjs";
import { ServiceChangeProfile, _decode_ServiceChangeProfile, _encode_ServiceChangeProfile } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeProfile.ta.mjs";
// export { ServiceChangeProfile, _decode_ServiceChangeProfile, _encode_ServiceChangeProfile } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeProfile.ta.mjs";
import { TimeNotation, _decode_TimeNotation, _encode_TimeNotation } from "../MEDIA-GATEWAY-CONTROL/TimeNotation.ta.mjs";
// export { TimeNotation, _decode_TimeNotation, _encode_TimeNotation } from "../MEDIA-GATEWAY-CONTROL/TimeNotation.ta.mjs";


/**
 * @summary ServiceChangeResParm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeResParm ::= SEQUENCE
 *     {
 *         serviceChangeMgcId            [0] MId OPTIONAL,
 *         serviceChangeAddress        [1] ServiceChangeAddress OPTIONAL,
 *         serviceChangeVersion        [2] INTEGER(0..99) OPTIONAL,
 *         serviceChangeProfile        [3] ServiceChangeProfile OPTIONAL,
 *         timestamp                    [4] TimeNotation OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class ServiceChangeResParm {
    constructor (
        /**
         * @summary `serviceChangeMgcId`.
         * @public
         * @readonly
         */
        readonly serviceChangeMgcId: OPTIONAL<MId>,
        /**
         * @summary `serviceChangeAddress`.
         * @public
         * @readonly
         */
        readonly serviceChangeAddress: OPTIONAL<ServiceChangeAddress>,
        /**
         * @summary `serviceChangeVersion`.
         * @public
         * @readonly
         */
        readonly serviceChangeVersion: OPTIONAL<INTEGER>,
        /**
         * @summary `serviceChangeProfile`.
         * @public
         * @readonly
         */
        readonly serviceChangeProfile: OPTIONAL<ServiceChangeProfile>,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: OPTIONAL<TimeNotation>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceChangeResParm
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceChangeResParm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceChangeResParm`.
     * @returns {ServiceChangeResParm}
     */
    public static _from_object (_o: { [_K in keyof (ServiceChangeResParm)]: (ServiceChangeResParm)[_K] }): ServiceChangeResParm {
        return new ServiceChangeResParm(_o.serviceChangeMgcId, _o.serviceChangeAddress, _o.serviceChangeVersion, _o.serviceChangeProfile, _o.timestamp, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceChangeResParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceChangeResParm: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceChangeMgcId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceChangeAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceChangeVersion", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceChangeProfile", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timestamp", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ServiceChangeResParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceChangeResParm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceChangeResParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceChangeResParm: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceChangeResParm: $.ASN1Decoder<ServiceChangeResParm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeResParm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeResParm (el: _Element): ServiceChangeResParm {
    if (!_cached_decoder_for_ServiceChangeResParm) { _cached_decoder_for_ServiceChangeResParm = function (el: _Element): ServiceChangeResParm {
    let serviceChangeMgcId: OPTIONAL<MId>;
    let serviceChangeAddress: OPTIONAL<ServiceChangeAddress>;
    let serviceChangeVersion: OPTIONAL<INTEGER>;
    let serviceChangeProfile: OPTIONAL<ServiceChangeProfile>;
    let timestamp: OPTIONAL<TimeNotation>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceChangeMgcId": (_el: _Element): void => { serviceChangeMgcId = $._decode_explicit<MId>(() => _decode_MId)(_el); },
        "serviceChangeAddress": (_el: _Element): void => { serviceChangeAddress = $._decode_explicit<ServiceChangeAddress>(() => _decode_ServiceChangeAddress)(_el); },
        "serviceChangeVersion": (_el: _Element): void => { serviceChangeVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceChangeProfile": (_el: _Element): void => { serviceChangeProfile = $._decode_implicit<ServiceChangeProfile>(() => _decode_ServiceChangeProfile)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decode_implicit<TimeNotation>(() => _decode_TimeNotation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceChangeResParm,
        _extension_additions_list_spec_for_ServiceChangeResParm,
        _root_component_type_list_2_spec_for_ServiceChangeResParm,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceChangeResParm(
        serviceChangeMgcId,
        serviceChangeAddress,
        serviceChangeVersion,
        serviceChangeProfile,
        timestamp,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceChangeResParm(el);
}

let _cached_encoder_for_ServiceChangeResParm: $.ASN1Encoder<ServiceChangeResParm> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeResParm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeResParm, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeResParm (value: ServiceChangeResParm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeResParm) { _cached_encoder_for_ServiceChangeResParm = function (value: ServiceChangeResParm, elGetter: $.ASN1Encoder<ServiceChangeResParm>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.serviceChangeMgcId === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_MId, $.BER)(value.serviceChangeMgcId, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ServiceChangeAddress, $.BER)(value.serviceChangeAddress, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeVersion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.serviceChangeVersion, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ServiceChangeProfile, $.BER)(value.serviceChangeProfile, $.BER)),
            /* IF_ABSENT  */ ((value.timestamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_TimeNotation, $.BER)(value.timestamp, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceChangeResParm(value, elGetter);
}


/* eslint-enable */
