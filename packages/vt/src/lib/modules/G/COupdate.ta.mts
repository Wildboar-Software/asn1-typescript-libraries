/* eslint-disable */
import {
    PrintableString,
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
import { COupdate_objectUpdate, _decode_COupdate_objectUpdate, _encode_COupdate_objectUpdate } from "../G/COupdate-objectUpdate.ta.mjs";
// export { COupdate_objectUpdate, _decode_COupdate_objectUpdate, _encode_COupdate_objectUpdate } from "../G/COupdate-objectUpdate.ta.mjs";


/**
 * @summary COupdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COupdate ::= SEQUENCE {
 *     coName PrintableString,
 *     objectUpdate CHOICE {
 *         characterUpdate     [0] IMPLICIT OCTET STRING,
 *         booleanUpdate       [1] IMPLICIT SEQUENCE {
 *             values  [0] IMPLICIT BIT STRING,
 *             mask    [1] IMPLICIT BIT STRING OPTIONAL
 *         },
 *         -- If mask is omitted, a bit string with the same length as "values" and
 *         -- a content of all ones is assumed. When mask is present a one bit means
 *         -- that the corresponding bit in value is to be used.
 *         symbolicUpdate      [2] IMPLICIT INTEGER,
 *         integerUpdate       [3] IMPLICIT INTEGER,
 *         bitStringUpdate     [4] IMPLICIT BIT STRING,
 *         multiElement        [5] IMPLICIT SEQUENCE OF SEQUENCE {
 *             identifier INTEGER,
 *             update CHOICE {
 *                 characterUpdate [0] IMPLICIT OCTET STRING,
 *                 booleanUpdate   [1] IMPLICIT SEQUENCE {
 *                     values  [0] IMPLICIT BIT STRING,
 *                     mask    [1] IMPLICIT BIT STRING OPTIONAL
 *                 }, -- See note under mask in G.COUpdate
 *                 symbolicUpdate  [2] IMPLICIT INTEGER,
 *                 integerUpdate   [3] IMPLICIT INTEGER,
 *                 bitStringUpdate [4] IMPLICIT BIT STRING
 *             }
 *         },
 *         cco                 [6]  IMPLICIT CCOupdate,
 *         fdco                [7]  IMPLICIT FDCOupdate,
 *         feico               [8]  IMPLICIT FEICOupdate,
 *         fepco               [9]  IMPLICIT FEPCOupdate,
 *         rio                 [10] IMPLICIT RIOupdate,
 *         other               [11] ANY
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class COupdate {
    constructor (
        /**
         * @summary `coName`.
         * @public
         * @readonly
         */
        readonly coName: PrintableString,
        /**
         * @summary `objectUpdate`.
         * @public
         * @readonly
         */
        readonly objectUpdate: COupdate_objectUpdate
    ) {}

    /**
     * @summary Restructures an object into a COupdate
     * @description
     * 
     * This takes an `object` and converts it to a `COupdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `COupdate`.
     * @returns {COupdate}
     */
    public static _from_object (_o: { [_K in keyof (COupdate)]: (COupdate)[_K] }): COupdate {
        return new COupdate(_o.coName, _o.objectUpdate);
    }


}

/**
 * @summary The Leading Root Component Types of COupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_COupdate: $.ComponentSpec[] = [
    new $.ComponentSpec("coName", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("objectUpdate", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of COupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_COupdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of COupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_COupdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_COupdate: $.ASN1Decoder<COupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) COupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_COupdate (el: _Element): COupdate {
    if (!_cached_decoder_for_COupdate) { _cached_decoder_for_COupdate = function (el: _Element): COupdate {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("COupdate contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "coName";
    sequence[1].name = "objectUpdate";
    const coName: PrintableString = $._decodePrintableString(sequence[0]);
    const objectUpdate: COupdate_objectUpdate = _decode_COupdate_objectUpdate(sequence[1]);
    return new COupdate(
        coName,
        objectUpdate,

    );
}; }
    return _cached_decoder_for_COupdate(el);
}

let _cached_encoder_for_COupdate: $.ASN1Encoder<COupdate> | null = null;

/**
 * @summary Encodes a(n) COupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The COupdate, encoded as an ASN.1 Element.
 */
export
function _encode_COupdate (value: COupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_COupdate) { _cached_encoder_for_COupdate = function (value: COupdate): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodePrintableString(value.coName, $.BER),
            /* REQUIRED   */ _encode_COupdate_objectUpdate(value.objectUpdate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_COupdate(value, elGetter);
}


/* eslint-enable */
