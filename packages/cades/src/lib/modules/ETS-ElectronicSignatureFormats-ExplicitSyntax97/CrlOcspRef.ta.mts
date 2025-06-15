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
import { CRLListID, _decode_CRLListID, _encode_CRLListID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/CRLListID.ta.mjs";
import { OcspListID, _decode_OcspListID, _encode_OcspListID } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OcspListID.ta.mjs";
import { OtherRevRefs, _decode_OtherRevRefs, _encode_OtherRevRefs } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherRevRefs.ta.mjs";
/**
 * @summary CrlOcspRef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CrlOcspRef ::= SEQUENCE {
 *     crlids      [0] CRLListID OPTIONAL,
 *     ocspids     [1] OcspListID OPTIONAL,
 *     otherRev    [2] OtherRevRefs OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CrlOcspRef {
    constructor (
        /**
         * @summary `crlids`.
         * @public
         * @readonly
         */
        readonly crlids: OPTIONAL<CRLListID>,
        /**
         * @summary `ocspids`.
         * @public
         * @readonly
         */
        readonly ocspids: OPTIONAL<OcspListID>,
        /**
         * @summary `otherRev`.
         * @public
         * @readonly
         */
        readonly otherRev: OPTIONAL<OtherRevRefs>
    ) {}

    /**
     * @summary Restructures an object into a CrlOcspRef
     * @description
     * 
     * This takes an `object` and converts it to a `CrlOcspRef`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrlOcspRef`.
     * @returns {CrlOcspRef}
     */
    public static _from_object (_o: { [_K in keyof (CrlOcspRef)]: (CrlOcspRef)[_K] }): CrlOcspRef {
        return new CrlOcspRef(_o.crlids, _o.ocspids, _o.otherRev);
    }


}

/**
 * @summary The Leading Root Component Types of CrlOcspRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CrlOcspRef: $.ComponentSpec[] = [
    new $.ComponentSpec("crlids", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ocspids", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("otherRev", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CrlOcspRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CrlOcspRef: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CrlOcspRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CrlOcspRef: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CrlOcspRef: $.ASN1Decoder<CrlOcspRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CrlOcspRef
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrlOcspRef} The decoded data structure.
 */
export
function _decode_CrlOcspRef (el: _Element) {
    if (!_cached_decoder_for_CrlOcspRef) { _cached_decoder_for_CrlOcspRef = function (el: _Element): CrlOcspRef {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let crlids: OPTIONAL<CRLListID>;
    let ocspids: OPTIONAL<OcspListID>;
    let otherRev: OPTIONAL<OtherRevRefs>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "crlids": (_el: _Element): void => { crlids = $._decode_explicit<CRLListID>(() => _decode_CRLListID)(_el); },
        "ocspids": (_el: _Element): void => { ocspids = $._decode_explicit<OcspListID>(() => _decode_OcspListID)(_el); },
        "otherRev": (_el: _Element): void => { otherRev = $._decode_explicit<OtherRevRefs>(() => _decode_OtherRevRefs)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CrlOcspRef,
        _extension_additions_list_spec_for_CrlOcspRef,
        _root_component_type_list_2_spec_for_CrlOcspRef,
        undefined,
    );
    return new CrlOcspRef( /* SEQUENCE_CONSTRUCTOR_CALL */
        crlids,
        ocspids,
        otherRev
    );
}; }
    return _cached_decoder_for_CrlOcspRef(el);
}

let _cached_encoder_for_CrlOcspRef: $.ASN1Encoder<CrlOcspRef> | null = null;

/**
 * @summary Encodes a(n) CrlOcspRef into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrlOcspRef, encoded as an ASN.1 Element.
 */
export
function _encode_CrlOcspRef (value: CrlOcspRef, elGetter: $.ASN1Encoder<CrlOcspRef>) {
    if (!_cached_encoder_for_CrlOcspRef) { _cached_encoder_for_CrlOcspRef = function (value: CrlOcspRef): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.crlids === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_CRLListID, $.BER)(value.crlids, $.BER)),
            /* IF_ABSENT  */ ((value.ocspids === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_OcspListID, $.BER)(value.ocspids, $.BER)),
            /* IF_ABSENT  */ ((value.otherRev === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_OtherRevRefs, $.BER)(value.otherRev, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CrlOcspRef(value, elGetter);
}


/* eslint-enable */
