/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary SMIMECapability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIMECapability{SMIME-CAPS:CapabilitySet} ::= SEQUENCE {
 * capabilityID    SMIME-CAPS.&id({CapabilitySet}),
 * parameters        SMIME-CAPS.&Type({CapabilitySet}{@capabilityID})
 *                 OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SMIMECapability {
    constructor(
        /**
         * @summary `capabilityID`.
         * @public
         * @readonly
         */
        readonly capabilityID: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a SMIMECapability
     * @description
     *
     * This takes an `object` and converts it to a `SMIMECapability`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMIMECapability`.
     * @returns {SMIMECapability}
     */
    public static _from_object(
        _o: { [_K in keyof SMIMECapability]: SMIMECapability[_K] }
    ): SMIMECapability {
        return new SMIMECapability(_o.capabilityID, _o.parameters);
    }
}

/**
 * @summary The Leading Root Component Types of SMIMECapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SMIMECapability: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "capabilityID",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("parameters", true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of SMIMECapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SMIMECapability: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SMIMECapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SMIMECapability: $.ComponentSpec[] = [];

let _cached_decoder_for_SMIMECapability: $.ASN1Decoder<SMIMECapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMIMECapability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMECapability} The decoded data structure.
 */
export function _decode_SMIMECapability(el: _Element) {
    if (!_cached_decoder_for_SMIMECapability) {
        _cached_decoder_for_SMIMECapability = function (
            el: _Element
        ): SMIMECapability {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let capabilityID!: OBJECT_IDENTIFIER;
            let parameters: OPTIONAL<_Element>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                capabilityID: (_el: _Element): void => {
                    capabilityID = $._decodeObjectIdentifier(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SMIMECapability,
                _extension_additions_list_spec_for_SMIMECapability,
                _root_component_type_list_2_spec_for_SMIMECapability,
                undefined
            );
            return new SMIMECapability /* SEQUENCE_CONSTRUCTOR_CALL */(
                capabilityID,
                parameters
            );
        };
    }
    return _cached_decoder_for_SMIMECapability(el);
}

let _cached_encoder_for_SMIMECapability: $.ASN1Encoder<SMIMECapability> | null = null;

/**
 * @summary Encodes a(n) SMIMECapability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMECapability, encoded as an ASN.1 Element.
 */
export function _encode_SMIMECapability(
    value: SMIMECapability,
    elGetter: $.ASN1Encoder<SMIMECapability>
) {
    if (!_cached_encoder_for_SMIMECapability) {
        _cached_encoder_for_SMIMECapability = function (
            value: SMIMECapability        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.capabilityID,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.parameters === undefined
                            ? undefined
                            : $._encodeAny(value.parameters, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SMIMECapability(value, elGetter);
}


/* eslint-enable */
