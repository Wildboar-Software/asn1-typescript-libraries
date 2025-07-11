/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttribsHash,
    _decode_AttribsHash,
    _encode_AttribsHash,
} from "../EnhancedSecurity/AttribsHash.ta.mjs";
import {
    Scope,
    _decode_Scope,
    _encode_Scope,
} from "../EnhancedSecurity/Scope.ta.mjs";
import {
    Signer,
    _decode_Signer,
    _encode_Signer,
} from "../EnhancedSecurity/Signer.ta.mjs";
/**
 * @summary AttributeIntegrityInfoContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIntegrityInfoContent ::= SEQUENCE {
 *   scope        Scope,           -- Identifies the attributes protected
 *   signer       Signer OPTIONAL, -- Authority or data originators name
 *   attribsHash  AttribsHash,     -- Hash value of protected attributes
 *   ... }
 * ```
 *
 */
export class AttributeIntegrityInfoContent {
    constructor(
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope: Scope,
        /**
         * @summary `signer`.
         * @public
         * @readonly
         */
        readonly signer: OPTIONAL<Signer>,
        /**
         * @summary `attribsHash`.
         * @public
         * @readonly
         */
        readonly attribsHash: AttribsHash,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeIntegrityInfoContent
     * @description
     *
     * This takes an `object` and converts it to a `AttributeIntegrityInfoContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeIntegrityInfoContent`.
     * @returns {AttributeIntegrityInfoContent}
     */
    public static _from_object(
        _o:
            {
                [_K in keyof AttributeIntegrityInfoContent]: AttributeIntegrityInfoContent[_K];
            }
    ): AttributeIntegrityInfoContent {
        return new AttributeIntegrityInfoContent(
            _o.scope,
            _o.signer,
            _o.attribsHash,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AttributeIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent: $.ComponentSpec[] = [
    new $.ComponentSpec("scope", false, $.hasAnyTag),
    new $.ComponentSpec("signer", true, $.not($.hasTag(_TagClass.universal, 16))),
    new $.ComponentSpec(
        "attribsHash",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeIntegrityInfoContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeIntegrityInfoContent: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeIntegrityInfoContent: $.ASN1Decoder<AttributeIntegrityInfoContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfoContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIntegrityInfoContent} The decoded data structure.
 */
export function _decode_AttributeIntegrityInfoContent(el: _Element): AttributeIntegrityInfoContent {
    if (!_cached_decoder_for_AttributeIntegrityInfoContent) {
        _cached_decoder_for_AttributeIntegrityInfoContent = function (
            el: _Element
        ): AttributeIntegrityInfoContent {
            let scope!: Scope;
            let signer: OPTIONAL<Signer>;
            let attribsHash!: AttribsHash;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                scope: (_el: _Element): void => {
                    scope = _decode_Scope(_el);
                },
                signer: (_el: _Element): void => {
                    signer = _decode_Signer(_el);
                },
                attribsHash: (_el: _Element): void => {
                    attribsHash = _decode_AttribsHash(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeIntegrityInfoContent,
                _extension_additions_list_spec_for_AttributeIntegrityInfoContent,
                _root_component_type_list_2_spec_for_AttributeIntegrityInfoContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeIntegrityInfoContent(
                scope,
                signer,
                attribsHash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeIntegrityInfoContent(el);
}

let _cached_encoder_for_AttributeIntegrityInfoContent: $.ASN1Encoder<AttributeIntegrityInfoContent> | null = null;

/**
 * @summary Encodes a(n) AttributeIntegrityInfoContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfoContent, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIntegrityInfoContent(
    value: AttributeIntegrityInfoContent,
    elGetter: $.ASN1Encoder<AttributeIntegrityInfoContent>
): _Element {
    if (!_cached_encoder_for_AttributeIntegrityInfoContent) {
        _cached_encoder_for_AttributeIntegrityInfoContent = function (
            value: AttributeIntegrityInfoContent        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Scope(value.scope, $.DER),
                            /* IF_ABSENT  */ value.signer === undefined
                                ? undefined
                                : _encode_Signer(value.signer, $.DER),
                            /* REQUIRED   */ _encode_AttribsHash(
                                value.attribsHash,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AttributeIntegrityInfoContent(value, elGetter);
}


/* eslint-enable */
