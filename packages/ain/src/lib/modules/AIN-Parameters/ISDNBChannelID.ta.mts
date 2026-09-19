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
import { PRIDS1ID, _decode_PRIDS1ID, _encode_PRIDS1ID } from "../AIN-Parameters/PRIDS1ID.ta.mjs";
// export { PRIDS1ID, _decode_PRIDS1ID, _encode_PRIDS1ID } from "../AIN-Parameters/PRIDS1ID.ta.mjs";
import { PRIDS0ID, _decode_PRIDS0ID, _encode_PRIDS0ID } from "../AIN-Parameters/PRIDS0ID.ta.mjs";
// export { PRIDS0ID, _decode_PRIDS0ID, _encode_PRIDS0ID } from "../AIN-Parameters/PRIDS0ID.ta.mjs";


/**
 * @summary ISDNBChannelID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDNBChannelID ::= SEQUENCE{
 *         pRIDS1ID [1] IMPLICIT PRIDS1ID OPTIONAL,
 *         pRIDS0ID [2] IMPLICIT PRIDS0ID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ISDNBChannelID {
    constructor (
        /**
         * @summary `pRIDS1ID`.
         * @public
         * @readonly
         */
        readonly pRIDS1ID: OPTIONAL<PRIDS1ID>,
        /**
         * @summary `pRIDS0ID`.
         * @public
         * @readonly
         */
        readonly pRIDS0ID: OPTIONAL<PRIDS0ID>
    ) {}

    /**
     * @summary Restructures an object into a ISDNBChannelID
     * @description
     * 
     * This takes an `object` and converts it to a `ISDNBChannelID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ISDNBChannelID`.
     * @returns {ISDNBChannelID}
     */
    public static _from_object (_o: { [_K in keyof (ISDNBChannelID)]: (ISDNBChannelID)[_K] }): ISDNBChannelID {
        return new ISDNBChannelID(_o.pRIDS1ID, _o.pRIDS0ID);
    }


}

/**
 * @summary The Leading Root Component Types of ISDNBChannelID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ISDNBChannelID: $.ComponentSpec[] = [
    new $.ComponentSpec("pRIDS1ID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pRIDS0ID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ISDNBChannelID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ISDNBChannelID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ISDNBChannelID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ISDNBChannelID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ISDNBChannelID: $.ASN1Decoder<ISDNBChannelID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDNBChannelID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDNBChannelID (el: _Element): ISDNBChannelID {
    if (!_cached_decoder_for_ISDNBChannelID) { _cached_decoder_for_ISDNBChannelID = function (el: _Element): ISDNBChannelID {
    let pRIDS1ID: OPTIONAL<PRIDS1ID>;
    let pRIDS0ID: OPTIONAL<PRIDS0ID>;
    const callbacks: $.DecodingMap = {
        "pRIDS1ID": (_el: _Element): void => { pRIDS1ID = $._decode_implicit<PRIDS1ID>(() => _decode_PRIDS1ID)(_el); },
        "pRIDS0ID": (_el: _Element): void => { pRIDS0ID = $._decode_implicit<PRIDS0ID>(() => _decode_PRIDS0ID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ISDNBChannelID,
        _extension_additions_list_spec_for_ISDNBChannelID,
        _root_component_type_list_2_spec_for_ISDNBChannelID,
        undefined,
    );
    return new ISDNBChannelID(
        pRIDS1ID,
        pRIDS0ID
    );
}; }
    return _cached_decoder_for_ISDNBChannelID(el);
}

let _cached_encoder_for_ISDNBChannelID: $.ASN1Encoder<ISDNBChannelID> | null = null;

/**
 * @summary Encodes a(n) ISDNBChannelID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDNBChannelID, encoded as an ASN.1 Element.
 */
export
function _encode_ISDNBChannelID (value: ISDNBChannelID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDNBChannelID) { _cached_encoder_for_ISDNBChannelID = function (value: ISDNBChannelID, elGetter: $.ASN1Encoder<ISDNBChannelID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pRIDS1ID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PRIDS1ID, $.BER)(value.pRIDS1ID, $.BER)),
            /* IF_ABSENT  */ ((value.pRIDS0ID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PRIDS0ID, $.BER)(value.pRIDS0ID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ISDNBChannelID(value, elGetter);
}


/* eslint-enable */
