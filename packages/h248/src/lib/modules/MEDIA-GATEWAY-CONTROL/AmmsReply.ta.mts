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
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { TerminationAudit, _decode_TerminationAudit, _encode_TerminationAudit } from "../MEDIA-GATEWAY-CONTROL/TerminationAudit.ta.mjs";
// export { TerminationAudit, _decode_TerminationAudit, _encode_TerminationAudit } from "../MEDIA-GATEWAY-CONTROL/TerminationAudit.ta.mjs";


/**
 * @summary AmmsReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmmsReply ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         terminationAudit            [1]TerminationAudit OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class AmmsReply {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `terminationAudit`.
         * @public
         * @readonly
         */
        readonly terminationAudit: OPTIONAL<TerminationAudit>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AmmsReply
     * @description
     * 
     * This takes an `object` and converts it to a `AmmsReply`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AmmsReply`.
     * @returns {AmmsReply}
     */
    public static _from_object (_o: { [_K in keyof (AmmsReply)]: (AmmsReply)[_K] }): AmmsReply {
        return new AmmsReply(_o.terminationID, _o.terminationAudit, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AmmsReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AmmsReply: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("terminationAudit", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AmmsReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AmmsReply: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AmmsReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AmmsReply: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AmmsReply: $.ASN1Decoder<AmmsReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmmsReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmmsReply (el: _Element): AmmsReply {
    if (!_cached_decoder_for_AmmsReply) { _cached_decoder_for_AmmsReply = function (el: _Element): AmmsReply {
    let terminationID!: TerminationIDList;
    let terminationAudit: OPTIONAL<TerminationAudit>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationID": (_el: _Element): void => { terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(_el); },
        "terminationAudit": (_el: _Element): void => { terminationAudit = $._decode_implicit<TerminationAudit>(() => _decode_TerminationAudit)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AmmsReply,
        _extension_additions_list_spec_for_AmmsReply,
        _root_component_type_list_2_spec_for_AmmsReply,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AmmsReply(
        terminationID,
        terminationAudit,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AmmsReply(el);
}

let _cached_encoder_for_AmmsReply: $.ASN1Encoder<AmmsReply> | null = null;

/**
 * @summary Encodes a(n) AmmsReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmmsReply, encoded as an ASN.1 Element.
 */
export
function _encode_AmmsReply (value: AmmsReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmmsReply) { _cached_encoder_for_AmmsReply = function (value: AmmsReply, elGetter: $.ASN1Encoder<AmmsReply>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* IF_ABSENT  */ ((value.terminationAudit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_TerminationAudit, $.BER)(value.terminationAudit, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AmmsReply(value, elGetter);
}


/* eslint-enable */
