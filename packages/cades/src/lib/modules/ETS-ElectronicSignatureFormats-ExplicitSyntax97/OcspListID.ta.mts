/* eslint-disable */
import {
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
import { OcspResponsesID, _decode_OcspResponsesID, _encode_OcspResponsesID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OcspResponsesID.ta.mjs";
/**
 * @summary OcspListID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OcspListID ::= SEQUENCE {
 *     ocspResponses   SEQUENCE OF OcspResponsesID }
 * ```
 *
 * @class
 */
export
class OcspListID {
    constructor (
        /**
         * @summary `ocspResponses`.
         * @public
         * @readonly
         */
        readonly ocspResponses: OcspResponsesID[]
    ) {}

    /**
     * @summary Restructures an object into a OcspListID
     * @description
     *
     * This takes an `object` and converts it to a `OcspListID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OcspListID`.
     * @returns {OcspListID}
     */
    public static _from_object (_o: { [_K in keyof (OcspListID)]: (OcspListID)[_K] }): OcspListID {
        return new OcspListID(_o.ocspResponses);
    }


}

/**
 * @summary The Leading Root Component Types of OcspListID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OcspListID: $.ComponentSpec[] = [
    new $.ComponentSpec("ocspResponses", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of OcspListID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OcspListID: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of OcspListID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_OcspListID: $.ComponentSpec[] = [

];

let _cached_decoder_for_OcspListID: $.ASN1Decoder<OcspListID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OcspListID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OcspListID} The decoded data structure.
 */
export
function _decode_OcspListID (el: _Element) {
    if (!_cached_decoder_for_OcspListID) { _cached_decoder_for_OcspListID = function (el: _Element): OcspListID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("OcspListID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ocspResponses";
    let ocspResponses!: OcspResponsesID[];
    ocspResponses = $._decodeSequenceOf<OcspResponsesID>(() => _decode_OcspResponsesID)(sequence[0]);
    return new OcspListID(
        ocspResponses,

    );
}; }
    return _cached_decoder_for_OcspListID(el);
}

let _cached_encoder_for_OcspListID: $.ASN1Encoder<OcspListID> | null = null;

/**
 * @summary Encodes a(n) OcspListID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OcspListID, encoded as an ASN.1 Element.
 */
export
function _encode_OcspListID (value: OcspListID, elGetter: $.ASN1Encoder<OcspListID>) {
    if (!_cached_encoder_for_OcspListID) { _cached_encoder_for_OcspListID = function (value: OcspListID): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<OcspResponsesID>(() => _encode_OcspResponsesID, $.DER)(value.ocspResponses, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_OcspListID(value, elGetter);
}


/* eslint-enable */
