/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type DisplayText,
    _decode_DisplayText,
    _encode_DisplayText,
} from "../AttributeCertificateDefinitions/DisplayText.ta.mjs";
import {
    displayTextToJSON,
    displayTextToString,
    integerToJSON,
    integerToString,
    type DisplayTextJSON,
} from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link NoticeReference}.
 */
export type NoticeReferenceJSON = {
    organization: DisplayTextJSON;
    noticeNumbers: Array<number | string>;
};
/**
 * @summary NoticeReference
 * @description
 *
 * Organization DisplayText plus SEQUENCE OF INTEGER notice numbers.
 * Empty `noticeNumbers` is allowed by the type (no SIZE constraint).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoticeReference ::= SEQUENCE {
 *   organization   DisplayText,
 *   noticeNumbers  SEQUENCE OF INTEGER }
 * ```
 *
 */
export class NoticeReference {
    /**
     * @summary `organization`.
     * @public
     * @readonly
     */
    public readonly organization: DisplayText;
    /**
     * @summary `noticeNumbers`.
     * @public
     * @readonly
     */
    public readonly noticeNumbers: INTEGER[];

    constructor(
        organization: DisplayText,
        noticeNumbers: INTEGER[]
    ) {
        this.organization = organization;
        this.noticeNumbers = noticeNumbers;
    }

    /**
     * @summary Restructures an object into a NoticeReference
     * @description
     *
     * This takes an `object` and converts it to a `NoticeReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoticeReference`.
     * @returns {NoticeReference}
     */
    public static _from_object(
        _o: { [_K in keyof NoticeReference]: NoticeReference[_K] }
    ): NoticeReference {
        return new NoticeReference(_o.organization, _o.noticeNumbers);
    }

    /**
     * @summary Print this notice reference
     * @description
     *
     * `{ organization:"...", noticeNumbers { 1, 2 } }`. The organization
     * text is JSON-escaped. Unrecognized extensions are omitted.
     *
     * @returns The printed value
     * @function
     * @public
     */
    public toString(): string {
        const organization = JSON.stringify(displayTextToString(this.organization));
        const numbers = this.noticeNumbers.map(integerToString).join(", ");
        return `{ organization:${organization}, noticeNumbers { ${numbers} } }`;
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `organization` is the character content of `DisplayText`. Notice
     * numbers that are not JSON-safe are decimal strings.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): NoticeReferenceJSON {
        return {
            organization: displayTextToJSON(this.organization),
            noticeNumbers: this.noticeNumbers.map(integerToJSON),
        };
    }
}

/**
 * @summary The Leading Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoticeReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "organization",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "noticeNumbers",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoticeReference: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoticeReference: $.ComponentSpec[] = [];

let _cached_decoder_for_NoticeReference: $.ASN1Decoder<NoticeReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoticeReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoticeReference} The decoded data structure.
 */
export function _decode_NoticeReference(el: _Element): NoticeReference {
    if (!_cached_decoder_for_NoticeReference) {
        _cached_decoder_for_NoticeReference = function (
            el: _Element
        ): NoticeReference {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "NoticeReference contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "organization";
            sequence[1].name = "noticeNumbers";
            let organization!: DisplayText;
            let noticeNumbers!: INTEGER[];
            organization = _decode_DisplayText(sequence[0]);
            noticeNumbers = $._decodeSequenceOf<INTEGER>(
                () => $._decodeInteger
            )(sequence[1]);
            return new NoticeReference(organization, noticeNumbers);
        };
    }
    return _cached_decoder_for_NoticeReference(el);
}

let _cached_encoder_for_NoticeReference: $.ASN1Encoder<NoticeReference> | null = null;

/**
 * @summary Encodes a(n) NoticeReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoticeReference, encoded as an ASN.1 Element.
 */
export function _encode_NoticeReference(
    value: NoticeReference,
    elGetter: $.ASN1Encoder<NoticeReference>
): _Element {
    if (!_cached_encoder_for_NoticeReference) {
        _cached_encoder_for_NoticeReference = function (
            value: NoticeReference        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DisplayText(
                            value.organization,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<INTEGER>(
                            () => $._encodeInteger,
                            $.DER
                        )(value.noticeNumbers, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_NoticeReference(value, elGetter);
}


/* eslint-enable */
