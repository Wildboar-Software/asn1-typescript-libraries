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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary UniversalPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPersonalName ::= SET {
 *   surname               [0]  UniversalOrBMPString{ub-universal-surname-length},
 *   --    If a language is specified within surname, then that language applies to each of the following
 *   --    optional components unless the component specifies another language.
 *   given-name
 *     [1]  UniversalOrBMPString{ub-universal-given-name-length} OPTIONAL,
 *   initials
 *     [2]  UniversalOrBMPString{ub-universal-initials-length} OPTIONAL,
 *   generation-qualifier
 *     [3]  UniversalOrBMPString{ub-universal-generation-qualifier-length}
 *       OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UniversalPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: UniversalOrBMPString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<UniversalOrBMPString>
    ) {}

    /**
     * @summary Restructures an object into a UniversalPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `UniversalPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalPersonalName`.
     * @returns {UniversalPersonalName}
     */
    public static _from_object(
        _o: { [_K in keyof UniversalPersonalName]: UniversalPersonalName[_K] }
    ): UniversalPersonalName {
        return new UniversalPersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}

/**
 * @summary The Leading Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalPersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'surname',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'given-name',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'initials',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'generation-qualifier',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];

let _cached_decoder_for_UniversalPersonalName: $.ASN1Decoder<UniversalPersonalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPersonalName} The decoded data structure.
 */
export function _decode_UniversalPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPersonalName) {
        _cached_decoder_for_UniversalPersonalName = function (
            el: _Element
        ): UniversalPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: UniversalOrBMPString;
            let given_name: OPTIONAL<UniversalOrBMPString>;
            let initials: OPTIONAL<UniversalOrBMPString>;
            let generation_qualifier: OPTIONAL<UniversalOrBMPString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_implicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                'given-name': (_el: _Element): void => {
                    given_name = $._decode_implicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_implicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                'generation-qualifier': (_el: _Element): void => {
                    generation_qualifier = $._decode_implicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniversalPersonalName,
                _extension_additions_list_spec_for_UniversalPersonalName,
                _root_component_type_list_2_spec_for_UniversalPersonalName,
                undefined
            );
            return new UniversalPersonalName /* SET_CONSTRUCTOR_CALL */(
                surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_UniversalPersonalName(el);
}

let _cached_encoder_for_UniversalPersonalName: $.ASN1Encoder<UniversalPersonalName> | null = null;

/**
 * @summary Encodes a(n) UniversalPersonalName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPersonalName(
    value: UniversalPersonalName,
    elGetter: $.ASN1Encoder<UniversalPersonalName>
) {
    if (!_cached_encoder_for_UniversalPersonalName) {
        _cached_encoder_for_UniversalPersonalName = function (
            value: UniversalPersonalName        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_UniversalOrBMPString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalPersonalName(value, elGetter);
}


/* eslint-enable */
