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



/**
 * @summary EntityReleasedGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityReleasedGPRSArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gPRSCause                [0] GPRSCause {bound},
 *     pDPID                [1] PDPID                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class EntityReleasedGPRSArg {
    constructor (
        /**
         * @summary `gPRSCause`.
         * @public
         * @readonly
         */
        readonly gPRSCause: GPRSCause,
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
     * @summary Restructures an object into a EntityReleasedGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `EntityReleasedGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntityReleasedGPRSArg`.
     * @returns {EntityReleasedGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (EntityReleasedGPRSArg)]: (EntityReleasedGPRSArg)[_K] }): EntityReleasedGPRSArg {
        return new EntityReleasedGPRSArg(_o.gPRSCause, _o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EntityReleasedGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EntityReleasedGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gPRSCause", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EntityReleasedGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EntityReleasedGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EntityReleasedGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EntityReleasedGPRSArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EntityReleasedGPRSArg: $.ASN1Decoder<EntityReleasedGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityReleasedGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityReleasedGPRSArg (el: _Element): EntityReleasedGPRSArg {
    if (!_cached_decoder_for_EntityReleasedGPRSArg) { _cached_decoder_for_EntityReleasedGPRSArg = function (el: _Element): EntityReleasedGPRSArg {
    let gPRSCause!: GPRSCause;
    let pDPID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gPRSCause": (_el: _Element): void => { gPRSCause = $._decode_implicit<GPRSCause>(() => _decode_GPRSCause)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EntityReleasedGPRSArg,
        _extension_additions_list_spec_for_EntityReleasedGPRSArg,
        _root_component_type_list_2_spec_for_EntityReleasedGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EntityReleasedGPRSArg(
        gPRSCause,
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EntityReleasedGPRSArg(el);
}

let _cached_encoder_for_EntityReleasedGPRSArg: $.ASN1Encoder<EntityReleasedGPRSArg> | null = null;

/**
 * @summary Encodes a(n) EntityReleasedGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityReleasedGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_EntityReleasedGPRSArg (value: EntityReleasedGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityReleasedGPRSArg) { _cached_encoder_for_EntityReleasedGPRSArg = function (value: EntityReleasedGPRSArg, elGetter: $.ASN1Encoder<EntityReleasedGPRSArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GPRSCause, $.BER)(value.gPRSCause, $.BER),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EntityReleasedGPRSArg(value, elGetter);
}


/* eslint-enable */
