/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/InformationFramework";
import {
    CredentialIdentifier,
    _decode_CredentialIdentifier,
    _encode_CredentialIdentifier,
} from "../PKCS-15/CredentialIdentifier.ta.mjs";


/**
 * @summary CommonPrivateKeyAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonPrivateKeyAttributes ::= SEQUENCE {
 *     subjectName Name OPTIONAL,
 *     keyIdentifiers [0] SEQUENCE OF CredentialIdentifier {{KeyIdentifiers}} OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class CommonPrivateKeyAttributes {
    constructor(
        /**
         * @summary `subjectName`.
         * @public
         * @readonly
         */
        readonly subjectName: OPTIONAL<Name>,
        /**
         * @summary `keyIdentifiers`.
         * @public
         * @readonly
         */
        readonly keyIdentifiers: OPTIONAL<CredentialIdentifier[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonPrivateKeyAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonPrivateKeyAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonPrivateKeyAttributes`.
     * @returns {CommonPrivateKeyAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CommonPrivateKeyAttributes]: CommonPrivateKeyAttributes[_K];
        }
    ): CommonPrivateKeyAttributes {
        return new CommonPrivateKeyAttributes(
            _o.subjectName,
            _o.keyIdentifiers,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of CommonPrivateKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonPrivateKeyAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectName", true, $.hasAnyTag),
    new $.ComponentSpec(
        "keyIdentifiers",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of CommonPrivateKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonPrivateKeyAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CommonPrivateKeyAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonPrivateKeyAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_CommonPrivateKeyAttributes: $.ASN1Decoder<CommonPrivateKeyAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CommonPrivateKeyAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonPrivateKeyAttributes} The decoded data structure.
 */
export function _decode_CommonPrivateKeyAttributes(el: _Element): CommonPrivateKeyAttributes {
    if (!_cached_decoder_for_CommonPrivateKeyAttributes) {
        _cached_decoder_for_CommonPrivateKeyAttributes = function (
            el: _Element
        ): CommonPrivateKeyAttributes {
            let subjectName: OPTIONAL<Name>;
            let keyIdentifiers: OPTIONAL<CredentialIdentifier[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                subjectName: (_el: _Element): void => {
                    subjectName = _decode_Name(_el);
                },
                keyIdentifiers: (_el: _Element): void => {
                    keyIdentifiers = $._decode_implicit<CredentialIdentifier[]>(
                        () =>
                            $._decodeSequenceOf<CredentialIdentifier>(
                                () => _decode_CredentialIdentifier
                            )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonPrivateKeyAttributes,
                _extension_additions_list_spec_for_CommonPrivateKeyAttributes,
                _root_component_type_list_2_spec_for_CommonPrivateKeyAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonPrivateKeyAttributes(
                subjectName,
                keyIdentifiers,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonPrivateKeyAttributes(el);
}


let _cached_encoder_for_CommonPrivateKeyAttributes: $.ASN1Encoder<CommonPrivateKeyAttributes> | null = null;


/**
 * @summary Encodes a(n) CommonPrivateKeyAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonPrivateKeyAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonPrivateKeyAttributes(
    value: CommonPrivateKeyAttributes,
    elGetter: $.ASN1Encoder<CommonPrivateKeyAttributes>
): _Element {
    if (!_cached_encoder_for_CommonPrivateKeyAttributes) {
        _cached_encoder_for_CommonPrivateKeyAttributes = function (
            value: CommonPrivateKeyAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.subjectName === undefined
                                ? undefined
                                : _encode_Name(value.subjectName, $.BER),
                            /* IF_ABSENT  */ value.keyIdentifiers === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<CredentialIdentifier>(
                                              () =>
                                                  _encode_CredentialIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.keyIdentifiers, $.BER),
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
    return _cached_encoder_for_CommonPrivateKeyAttributes(value, elGetter);
}


/* eslint-enable */
