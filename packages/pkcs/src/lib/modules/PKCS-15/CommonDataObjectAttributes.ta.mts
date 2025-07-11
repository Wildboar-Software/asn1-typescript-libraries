/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Label, _decode_Label, _encode_Label } from "../PKCS-15/Label.ta.mjs";

/**
 * @summary CommonDataObjectAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonDataObjectAttributes ::= SEQUENCE {
 *     applicationName Label OPTIONAL,
 *     applicationOID OBJECT IDENTIFIER OPTIONAL,
 *     ... -- For future extensions
 * } (WITH COMPONENTS {..., applicationName PRESENT} | WITH COMPONENTS {..., applicationOID PRESENT})
 * ```
 *
 */
export class CommonDataObjectAttributes {
    constructor(
        /**
         * @summary `applicationName`.
         * @public
         * @readonly
         */
        readonly applicationName: OPTIONAL<Label>,
        /**
         * @summary `applicationOID`.
         * @public
         * @readonly
         */
        readonly applicationOID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonDataObjectAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonDataObjectAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonDataObjectAttributes`.
     * @returns {CommonDataObjectAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CommonDataObjectAttributes]: CommonDataObjectAttributes[_K];
        }
    ): CommonDataObjectAttributes {
        return new CommonDataObjectAttributes(
            _o.applicationName,
            _o.applicationOID,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of CommonDataObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonDataObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "applicationName",
        true,
        $.hasTag(_TagClass.universal, 12)
    ),
    new $.ComponentSpec(
        "applicationOID",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
];


/**
 * @summary The Trailing Root Component Types of CommonDataObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonDataObjectAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CommonDataObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonDataObjectAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_CommonDataObjectAttributes: $.ASN1Decoder<CommonDataObjectAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CommonDataObjectAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonDataObjectAttributes} The decoded data structure.
 */
export function _decode_CommonDataObjectAttributes(el: _Element): CommonDataObjectAttributes {
    if (!_cached_decoder_for_CommonDataObjectAttributes) {
        _cached_decoder_for_CommonDataObjectAttributes = function (
            el: _Element
        ): CommonDataObjectAttributes {
            let applicationName: OPTIONAL<Label>;
            let applicationOID: OPTIONAL<OBJECT_IDENTIFIER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                applicationName: (_el: _Element): void => {
                    applicationName = _decode_Label(_el);
                },
                applicationOID: (_el: _Element): void => {
                    applicationOID = $._decodeObjectIdentifier(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonDataObjectAttributes,
                _extension_additions_list_spec_for_CommonDataObjectAttributes,
                _root_component_type_list_2_spec_for_CommonDataObjectAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonDataObjectAttributes(
                applicationName,
                applicationOID,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonDataObjectAttributes(el);
}


let _cached_encoder_for_CommonDataObjectAttributes: $.ASN1Encoder<CommonDataObjectAttributes> | null = null;


/**
 * @summary Encodes a(n) CommonDataObjectAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonDataObjectAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonDataObjectAttributes(
    value: CommonDataObjectAttributes,
    elGetter: $.ASN1Encoder<CommonDataObjectAttributes>
): _Element {
    if (!_cached_encoder_for_CommonDataObjectAttributes) {
        _cached_encoder_for_CommonDataObjectAttributes = function (
            value: CommonDataObjectAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.applicationName === undefined
                                ? undefined
                                : _encode_Label(value.applicationName, $.BER),
                            /* IF_ABSENT  */ value.applicationOID === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.applicationOID,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CommonDataObjectAttributes(value, elGetter);
}


/* eslint-enable */
