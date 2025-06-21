/* eslint-disable */
import {
    GeneralizedTime,
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
import { ResponderID, _decode_ResponderID, _encode_ResponderID } from "@wildboar/ocsp/src/lib/modules/OCSP-2013-08/ResponderID.ta.mjs";
/**
 * @summary OcspIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OcspIdentifier ::= SEQUENCE {
 *     ocspResponderID     ResponderID, -- As in OCSP response data
 *     producedAt          GeneralizedTime -- As in OCSP response data
 *     }
 * ```
 *
 * @class
 */
export
class OcspIdentifier {
    constructor (
        /**
         * @summary `ocspResponderID`.
         * @public
         * @readonly
         */
        readonly ocspResponderID: ResponderID,
        /**
         * @summary `producedAt`.
         * @public
         * @readonly
         */
        readonly producedAt: GeneralizedTime
    ) {}

    /**
     * @summary Restructures an object into a OcspIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `OcspIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OcspIdentifier`.
     * @returns {OcspIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (OcspIdentifier)]: (OcspIdentifier)[_K] }): OcspIdentifier {
        return new OcspIdentifier(_o.ocspResponderID, _o.producedAt);
    }


}

/**
 * @summary The Leading Root Component Types of OcspIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OcspIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("ocspResponderID", false, $.hasAnyTag),
    new $.ComponentSpec("producedAt", false, $.hasTag(_TagClass.universal, 24))
];

/**
 * @summary The Trailing Root Component Types of OcspIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OcspIdentifier: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of OcspIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_OcspIdentifier: $.ComponentSpec[] = [

];

let _cached_decoder_for_OcspIdentifier: $.ASN1Decoder<OcspIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OcspIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OcspIdentifier} The decoded data structure.
 */
export
function _decode_OcspIdentifier (el: _Element) {
    if (!_cached_decoder_for_OcspIdentifier) { _cached_decoder_for_OcspIdentifier = function (el: _Element): OcspIdentifier {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OcspIdentifier contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ocspResponderID";
    sequence[1].name = "producedAt";
    let ocspResponderID!: ResponderID;
    let producedAt!: GeneralizedTime;
    ocspResponderID = _decode_ResponderID(sequence[0]);
    producedAt = $._decodeGeneralizedTime(sequence[1]);
    return new OcspIdentifier(
        ocspResponderID,
        producedAt,

    );
}; }
    return _cached_decoder_for_OcspIdentifier(el);
}

let _cached_encoder_for_OcspIdentifier: $.ASN1Encoder<OcspIdentifier> | null = null;

/**
 * @summary Encodes a(n) OcspIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OcspIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_OcspIdentifier (value: OcspIdentifier, elGetter: $.ASN1Encoder<OcspIdentifier>) {
    if (!_cached_encoder_for_OcspIdentifier) { _cached_encoder_for_OcspIdentifier = function (value: OcspIdentifier): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResponderID(value.ocspResponderID, $.DER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.producedAt, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_OcspIdentifier(value, elGetter);
}


/* eslint-enable */
