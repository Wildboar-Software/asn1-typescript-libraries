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
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";


/**
 * @summary ConnectionListItems
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionListItems ::= SEQUENCE
 * {    connection            ConnectionID }
 * ```
 * 
 * @class
 */
export
class ConnectionListItems {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID
    ) {}

    /**
     * @summary Restructures an object into a ConnectionListItems
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectionListItems`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectionListItems`.
     * @returns {ConnectionListItems}
     */
    public static _from_object (_o: { [_K in keyof (ConnectionListItems)]: (ConnectionListItems)[_K] }): ConnectionListItems {
        return new ConnectionListItems(_o.connection);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectionListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectionListItems: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConnectionListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectionListItems: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectionListItems
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectionListItems: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectionListItems: $.ASN1Decoder<ConnectionListItems> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionListItems
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionListItems (el: _Element): ConnectionListItems {
    if (!_cached_decoder_for_ConnectionListItems) { _cached_decoder_for_ConnectionListItems = function (el: _Element): ConnectionListItems {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ConnectionListItems contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "connection";
    let connection!: ConnectionID;
    connection = _decode_ConnectionID(sequence[0]);
    return new ConnectionListItems(
        connection,

    );
}; }
    return _cached_decoder_for_ConnectionListItems(el);
}

let _cached_encoder_for_ConnectionListItems: $.ASN1Encoder<ConnectionListItems> | null = null;

/**
 * @summary Encodes a(n) ConnectionListItems into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionListItems, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionListItems (value: ConnectionListItems, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionListItems) { _cached_encoder_for_ConnectionListItems = function (value: ConnectionListItems, elGetter: $.ASN1Encoder<ConnectionListItems>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectionListItems(value, elGetter);
}


/* eslint-enable */
