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
import * as $ from "@wildboar/asn1/functional";
import { NoticeReference, _decode_NoticeReference, _encode_NoticeReference } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/NoticeReference.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/DisplayText.ta.mjs";
/**
 * @summary SPUserNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPUserNotice ::= SEQUENCE {
 *     noticeRef       NoticeReference OPTIONAL,
 *     explicitText    DisplayText OPTIONAL }
 * ```
 *
 * @class
 */
export
class SPUserNotice {
    constructor (
        /**
         * @summary `noticeRef`.
         * @public
         * @readonly
         */
        readonly noticeRef: OPTIONAL<NoticeReference>,
        /**
         * @summary `explicitText`.
         * @public
         * @readonly
         */
        readonly explicitText: OPTIONAL<DisplayText>
    ) {}

    /**
     * @summary Restructures an object into a SPUserNotice
     * @description
     *
     * This takes an `object` and converts it to a `SPUserNotice`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SPUserNotice`.
     * @returns {SPUserNotice}
     */
    public static _from_object (_o: { [_K in keyof (SPUserNotice)]: (SPUserNotice)[_K] }): SPUserNotice {
        return new SPUserNotice(_o.noticeRef, _o.explicitText);
    }


}

/**
 * @summary The Leading Root Component Types of SPUserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SPUserNotice: $.ComponentSpec[] = [
    new $.ComponentSpec("noticeRef", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("explicitText", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SPUserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SPUserNotice: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of SPUserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_SPUserNotice: $.ComponentSpec[] = [

];

let _cached_decoder_for_SPUserNotice: $.ASN1Decoder<SPUserNotice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SPUserNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SPUserNotice} The decoded data structure.
 */
export
function _decode_SPUserNotice (el: _Element) {
    if (!_cached_decoder_for_SPUserNotice) { _cached_decoder_for_SPUserNotice = function (el: _Element): SPUserNotice {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let noticeRef: OPTIONAL<NoticeReference>;
    let explicitText: OPTIONAL<DisplayText>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "noticeRef": (_el: _Element): void => { noticeRef = _decode_NoticeReference(_el); },
        "explicitText": (_el: _Element): void => { explicitText = _decode_DisplayText(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SPUserNotice,
        _extension_additions_list_spec_for_SPUserNotice,
        _root_component_type_list_2_spec_for_SPUserNotice,
        undefined,
    );
    return new SPUserNotice( /* SEQUENCE_CONSTRUCTOR_CALL */
        noticeRef,
        explicitText
    );
}; }
    return _cached_decoder_for_SPUserNotice(el);
}

let _cached_encoder_for_SPUserNotice: $.ASN1Encoder<SPUserNotice> | null = null;

/**
 * @summary Encodes a(n) SPUserNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SPUserNotice, encoded as an ASN.1 Element.
 */
export
function _encode_SPUserNotice (value: SPUserNotice, elGetter: $.ASN1Encoder<SPUserNotice>) {
    if (!_cached_encoder_for_SPUserNotice) { _cached_encoder_for_SPUserNotice = function (value: SPUserNotice): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.noticeRef === undefined) ? undefined : _encode_NoticeReference(value.noticeRef, $.DER)),
            /* IF_ABSENT  */ ((value.explicitText === undefined) ? undefined : _encode_DisplayText(value.explicitText, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_SPUserNotice(value, elGetter);
}


/* eslint-enable */
