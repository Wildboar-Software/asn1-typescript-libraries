/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary AccessDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessDescription ::= SEQUENCE {
 *   accessMethod    OBJECT IDENTIFIER,
 *   accessLocation  GeneralName }
 * ```
 *
 * @class
 */
export class AccessDescription {
    constructor(
        /**
         * @summary `accessMethod`.
         * @public
         * @readonly
         */
        readonly accessMethod: OBJECT_IDENTIFIER,
        /**
         * @summary `accessLocation`.
         * @public
         * @readonly
         */
        readonly accessLocation: GeneralName
    ) {}

    /**
     * @summary Restructures an object into a AccessDescription
     * @description
     *
     * This takes an `object` and converts it to a `AccessDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessDescription`.
     * @returns {AccessDescription}
     */
    public static _from_object(
        _o: { [_K in keyof AccessDescription]: AccessDescription[_K] }
    ): AccessDescription {
        return new AccessDescription(_o.accessMethod, _o.accessLocation);
    }
}

/**
 * @summary The Leading Root Component Types of AccessDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AccessDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessMethod",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "accessLocation",
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of AccessDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AccessDescription: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AccessDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AccessDescription: $.ComponentSpec[] = [];

let _cached_decoder_for_AccessDescription: $.ASN1Decoder<AccessDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessDescription} The decoded data structure.
 */
export function _decode_AccessDescription(el: _Element) {
    if (!_cached_decoder_for_AccessDescription) {
        _cached_decoder_for_AccessDescription = function (
            el: _Element
        ): AccessDescription {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AccessDescription contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "accessMethod";
            sequence[1].name = "accessLocation";
            let accessMethod!: OBJECT_IDENTIFIER;
            let accessLocation!: GeneralName;
            accessMethod = $._decodeObjectIdentifier(sequence[0]);
            accessLocation = _decode_GeneralName(sequence[1]);
            return new AccessDescription(accessMethod, accessLocation);
        };
    }
    return _cached_decoder_for_AccessDescription(el);
}

let _cached_encoder_for_AccessDescription: $.ASN1Encoder<AccessDescription> | null = null;

/**
 * @summary Encodes a(n) AccessDescription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessDescription, encoded as an ASN.1 Element.
 */
export function _encode_AccessDescription(
    value: AccessDescription,
    elGetter: $.ASN1Encoder<AccessDescription>
) {
    if (!_cached_encoder_for_AccessDescription) {
        _cached_encoder_for_AccessDescription = function (
            value: AccessDescription        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.accessMethod,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_GeneralName(
                            value.accessLocation,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AccessDescription(value, elGetter);
}


/* eslint-enable */
