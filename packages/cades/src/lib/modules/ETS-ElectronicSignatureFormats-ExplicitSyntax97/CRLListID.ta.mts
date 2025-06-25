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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CrlValidatedID, _decode_CrlValidatedID, _encode_CrlValidatedID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CrlValidatedID.ta.mjs";
/**
 * @summary CRLListID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLListID ::= SEQUENCE {
 *     crls        SEQUENCE OF CrlValidatedID }
 * ```
 *
 * @class
 */
export
class CRLListID {
    constructor (
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: CrlValidatedID[]
    ) {}

    /**
     * @summary Restructures an object into a CRLListID
     * @description
     *
     * This takes an `object` and converts it to a `CRLListID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CRLListID`.
     * @returns {CRLListID}
     */
    public static _from_object (_o: { [_K in keyof (CRLListID)]: (CRLListID)[_K] }): CRLListID {
        return new CRLListID(_o.crls);
    }


}

/**
 * @summary The Leading Root Component Types of CRLListID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CRLListID: $.ComponentSpec[] = [
    new $.ComponentSpec("crls", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CRLListID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CRLListID: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of CRLListID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_CRLListID: $.ComponentSpec[] = [

];

let _cached_decoder_for_CRLListID: $.ASN1Decoder<CRLListID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CRLListID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLListID} The decoded data structure.
 */
export
function _decode_CRLListID (el: _Element): CRLListID {
    if (!_cached_decoder_for_CRLListID) { _cached_decoder_for_CRLListID = function (el: _Element): CRLListID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CRLListID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "crls";
    let crls!: CrlValidatedID[];
    crls = $._decodeSequenceOf<CrlValidatedID>(() => _decode_CrlValidatedID)(sequence[0]);
    return new CRLListID(
        crls,

    );
}; }
    return _cached_decoder_for_CRLListID(el);
}

let _cached_encoder_for_CRLListID: $.ASN1Encoder<CRLListID> | null = null;

/**
 * @summary Encodes a(n) CRLListID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLListID, encoded as an ASN.1 Element.
 */
export
function _encode_CRLListID (value: CRLListID, elGetter: $.ASN1Encoder<CRLListID>): _Element {
    if (!_cached_encoder_for_CRLListID) { _cached_encoder_for_CRLListID = function (value: CRLListID): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeSequenceOf<CrlValidatedID>(() => _encode_CrlValidatedID, $.DER)(value.crls, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_CRLListID(value, elGetter);
}


/* eslint-enable */
