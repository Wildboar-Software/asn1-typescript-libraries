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
import { type ChargingCharacteristics, _decode_ChargingCharacteristics, _encode_ChargingCharacteristics } from "../CAP-datatypes/ChargingCharacteristics.ta.mjs";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";



/**
 * @summary ApplyChargingGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingGPRSArg ::= SEQUENCE { 
 *     chargingCharacteristics        [0] ChargingCharacteristics,
 *     tariffSwitchInterval        [1] INTEGER (1..86400)            OPTIONAL,
 *     pDPID                [2] PDPID                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ApplyChargingGPRSArg {
    constructor (
        /**
         * @summary `chargingCharacteristics`.
         * @public
         * @readonly
         */
        readonly chargingCharacteristics: ChargingCharacteristics,
        /**
         * @summary `tariffSwitchInterval`.
         * @public
         * @readonly
         */
        readonly tariffSwitchInterval: OPTIONAL<INTEGER>,
        /**
         * @summary `pDPID`.
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ApplyChargingGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ApplyChargingGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplyChargingGPRSArg`.
     * @returns {ApplyChargingGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (ApplyChargingGPRSArg)]: (ApplyChargingGPRSArg)[_K] }): ApplyChargingGPRSArg {
        return new ApplyChargingGPRSArg(_o.chargingCharacteristics, _o.tariffSwitchInterval, _o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ApplyChargingGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplyChargingGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingCharacteristics", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("tariffSwitchInterval", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ApplyChargingGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplyChargingGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplyChargingGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplyChargingGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplyChargingGPRSArg: $.ASN1Decoder<ApplyChargingGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyChargingGPRSArg (el: _Element): ApplyChargingGPRSArg {
    if (!_cached_decoder_for_ApplyChargingGPRSArg) { _cached_decoder_for_ApplyChargingGPRSArg = function (el: _Element): ApplyChargingGPRSArg {
    let chargingCharacteristics!: ChargingCharacteristics;
    let tariffSwitchInterval: OPTIONAL<INTEGER>;
    let pDPID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "chargingCharacteristics": (_el: _Element): void => { chargingCharacteristics = $._decode_implicit<ChargingCharacteristics>(() => _decode_ChargingCharacteristics)(_el); },
        "tariffSwitchInterval": (_el: _Element): void => { tariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplyChargingGPRSArg,
        _extension_additions_list_spec_for_ApplyChargingGPRSArg,
        _root_component_type_list_2_spec_for_ApplyChargingGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ApplyChargingGPRSArg(
        chargingCharacteristics,
        tariffSwitchInterval,
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ApplyChargingGPRSArg(el);
}

let _cached_encoder_for_ApplyChargingGPRSArg: $.ASN1Encoder<ApplyChargingGPRSArg> | null = null;

/**
 * @summary Encodes a(n) ApplyChargingGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyChargingGPRSArg (value: ApplyChargingGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyChargingGPRSArg) { _cached_encoder_for_ApplyChargingGPRSArg = function (value: ApplyChargingGPRSArg, elGetter: $.ASN1Encoder<ApplyChargingGPRSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingCharacteristics, $.BER)(value.chargingCharacteristics, $.BER),
            /* IF_ABSENT  */ ((value.tariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tariffSwitchInterval, $.BER)),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ApplyChargingGPRSArg(value, elGetter);
}


/* eslint-enable */
