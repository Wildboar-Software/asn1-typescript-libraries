/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    JoinContextType,
    _decode_JoinContextType,
    _encode_JoinContextType,
} from "../DirectoryAbstractService/JoinContextType.ta.mjs";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary JoinAttPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinAttPair ::= SEQUENCE {
 *   baseAtt      AttributeType,
 *   joinAtt      AttributeType,
 *   joinContext  SEQUENCE SIZE (1..MAX) OF JoinContextType OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class JoinAttPair {
    constructor(
        /**
         * @summary `baseAtt`.
         * @public
         * @readonly
         */
        readonly baseAtt: AttributeType,
        /**
         * @summary `joinAtt`.
         * @public
         * @readonly
         */
        readonly joinAtt: AttributeType,
        /**
         * @summary `joinContext`.
         * @public
         * @readonly
         */
        readonly joinContext?: OPTIONAL<JoinContextType[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a JoinAttPair
     * @description
     *
     * This takes an `object` and converts it to a `JoinAttPair`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `JoinAttPair`.
     * @returns {JoinAttPair}
     */
    public static _from_object(
        _o: { [_K in keyof JoinAttPair]: JoinAttPair[_K] }
    ): JoinAttPair {
        return new JoinAttPair(
            _o.baseAtt,
            _o.joinAtt,
            _o.joinContext,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of JoinAttPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_JoinAttPair: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseAtt",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "joinAtt",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "joinContext",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of JoinAttPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_JoinAttPair: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of JoinAttPair
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_JoinAttPair: $.ComponentSpec[] = [];

let _cached_decoder_for_JoinAttPair: $.ASN1Decoder<JoinAttPair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) JoinAttPair
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinAttPair} The decoded data structure.
 */
export function _decode_JoinAttPair(el: _Element) {
    if (!_cached_decoder_for_JoinAttPair) {
        _cached_decoder_for_JoinAttPair = function (el: _Element): JoinAttPair {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseAtt!: AttributeType;
            let joinAtt!: AttributeType;
            let joinContext: OPTIONAL<JoinContextType[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                baseAtt: (_el: _Element): void => {
                    baseAtt = _decode_AttributeType(_el);
                },
                joinAtt: (_el: _Element): void => {
                    joinAtt = _decode_AttributeType(_el);
                },
                joinContext: (_el: _Element): void => {
                    joinContext = $._decodeSequenceOf<JoinContextType>(
                        () => _decode_JoinContextType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_JoinAttPair,
                _extension_additions_list_spec_for_JoinAttPair,
                _root_component_type_list_2_spec_for_JoinAttPair,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new JoinAttPair(
                /* SEQUENCE_CONSTRUCTOR_CALL */ baseAtt,
                joinAtt,
                joinContext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_JoinAttPair(el);
}

let _cached_encoder_for_JoinAttPair: $.ASN1Encoder<JoinAttPair> | null = null;

/**
 * @summary Encodes a(n) JoinAttPair into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinAttPair, encoded as an ASN.1 Element.
 */
export function _encode_JoinAttPair(
    value: JoinAttPair,
    elGetter: $.ASN1Encoder<JoinAttPair>
) {
    if (!_cached_encoder_for_JoinAttPair) {
        _cached_encoder_for_JoinAttPair = function (
            value: JoinAttPair        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.baseAtt,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttributeType(
                                value.joinAtt,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.joinContext === undefined
                                ? undefined
                                : $._encodeSequenceOf<JoinContextType>(
                                      () => _encode_JoinContextType,
                                      $.BER
                                  )(value.joinContext, $.BER),
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
    return _cached_encoder_for_JoinAttPair(value, elGetter);
}


/* eslint-enable */
