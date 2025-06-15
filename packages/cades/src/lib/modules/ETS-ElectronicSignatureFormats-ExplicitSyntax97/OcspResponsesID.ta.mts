/* eslint-disable */
import {
    OPTIONAL,
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
import { OcspIdentifier, _decode_OcspIdentifier, _encode_OcspIdentifier } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OcspIdentifier.ta.mjs";
import { OtherHash, _decode_OtherHash, _encode_OtherHash } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHash.ta.mjs";
/**
 * @summary OcspResponsesID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OcspResponsesID ::= SEQUENCE {
 *     ocspIdentifier      OcspIdentifier,
 *     ocspRepHash         OtherHash OPTIONAL }
 * ```
 * 
 * @class
 */
export
class OcspResponsesID {
    constructor (
        /**
         * @summary `ocspIdentifier`.
         * @public
         * @readonly
         */
        readonly ocspIdentifier: OcspIdentifier,
        /**
         * @summary `ocspRepHash`.
         * @public
         * @readonly
         */
        readonly ocspRepHash: OPTIONAL<OtherHash>
    ) {}

    /**
     * @summary Restructures an object into a OcspResponsesID
     * @description
     * 
     * This takes an `object` and converts it to a `OcspResponsesID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OcspResponsesID`.
     * @returns {OcspResponsesID}
     */
    public static _from_object (_o: { [_K in keyof (OcspResponsesID)]: (OcspResponsesID)[_K] }): OcspResponsesID {
        return new OcspResponsesID(_o.ocspIdentifier, _o.ocspRepHash);
    }


}

/**
 * @summary The Leading Root Component Types of OcspResponsesID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OcspResponsesID: $.ComponentSpec[] = [
    new $.ComponentSpec("ocspIdentifier", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("ocspRepHash", true, $.hasAnyTag, undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of OcspResponsesID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OcspResponsesID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OcspResponsesID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OcspResponsesID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OcspResponsesID: $.ASN1Decoder<OcspResponsesID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OcspResponsesID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OcspResponsesID} The decoded data structure.
 */
export
function _decode_OcspResponsesID (el: _Element) {
    if (!_cached_decoder_for_OcspResponsesID) { _cached_decoder_for_OcspResponsesID = function (el: _Element): OcspResponsesID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let ocspIdentifier!: OcspIdentifier;
    let ocspRepHash: OPTIONAL<OtherHash>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "ocspIdentifier": (_el: _Element): void => { ocspIdentifier = _decode_OcspIdentifier(_el); },
        "ocspRepHash": (_el: _Element): void => { ocspRepHash = _decode_OtherHash(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OcspResponsesID,
        _extension_additions_list_spec_for_OcspResponsesID,
        _root_component_type_list_2_spec_for_OcspResponsesID,
        undefined,
    );
    return new OcspResponsesID( /* SEQUENCE_CONSTRUCTOR_CALL */
        ocspIdentifier,
        ocspRepHash
    );
}; }
    return _cached_decoder_for_OcspResponsesID(el);
}

let _cached_encoder_for_OcspResponsesID: $.ASN1Encoder<OcspResponsesID> | null = null;

/**
 * @summary Encodes a(n) OcspResponsesID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OcspResponsesID, encoded as an ASN.1 Element.
 */
export
function _encode_OcspResponsesID (value: OcspResponsesID, elGetter: $.ASN1Encoder<OcspResponsesID>) {
    if (!_cached_encoder_for_OcspResponsesID) { _cached_encoder_for_OcspResponsesID = function (value: OcspResponsesID): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_OcspIdentifier(value.ocspIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.ocspRepHash === undefined) ? undefined : _encode_OtherHash(value.ocspRepHash, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OcspResponsesID(value, elGetter);
}


/* eslint-enable */
