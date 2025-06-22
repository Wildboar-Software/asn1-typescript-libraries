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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta.mjs';
import {
    Checkmark,
    _decode_Checkmark,
    _encode_Checkmark,
} from '../IPMSHeadingExtensions/Checkmark.ta.mjs';
/**
 * @summary CirculationMember
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationMember ::= SET {
 *   circulation-recipient
 *     RecipientSpecifier
 *       (WITH COMPONENTS {
 *          ...,
 *          recipient  (WITH COMPONENTS {
 *                        ...,
 *                        formal-name  PRESENT
 *                      })
 *        }),
 *   checked                Checkmark OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CirculationMember {
    constructor(
        /**
         * @summary `circulation_recipient`.
         * @public
         * @readonly
         */
        readonly circulation_recipient: RecipientSpecifier,
        /**
         * @summary `checked`.
         * @public
         * @readonly
         */
        readonly checked: OPTIONAL<Checkmark>
    ) {}

    /**
     * @summary Restructures an object into a CirculationMember
     * @description
     *
     * This takes an `object` and converts it to a `CirculationMember`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CirculationMember`.
     * @returns {CirculationMember}
     */
    public static _from_object(
        _o: { [_K in keyof CirculationMember]: CirculationMember[_K] }
    ): CirculationMember {
        return new CirculationMember(_o.circulation_recipient, _o.checked);
    }
}

/**
 * @summary The Leading Root Component Types of CirculationMember
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CirculationMember: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'circulation-recipient',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec('checked', true, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CirculationMember
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CirculationMember: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CirculationMember
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CirculationMember: $.ComponentSpec[] = [];

let _cached_decoder_for_CirculationMember: $.ASN1Decoder<CirculationMember> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CirculationMember
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationMember} The decoded data structure.
 */
export function _decode_CirculationMember(el: _Element) {
    if (!_cached_decoder_for_CirculationMember) {
        _cached_decoder_for_CirculationMember = function (
            el: _Element
        ): CirculationMember {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let circulation_recipient!: RecipientSpecifier;
            let checked: OPTIONAL<Checkmark>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'circulation-recipient': (_el: _Element): void => {
                    circulation_recipient = _decode_RecipientSpecifier(_el);
                },
                checked: (_el: _Element): void => {
                    checked = _decode_Checkmark(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CirculationMember,
                _extension_additions_list_spec_for_CirculationMember,
                _root_component_type_list_2_spec_for_CirculationMember,
                undefined
            );
            return new CirculationMember /* SET_CONSTRUCTOR_CALL */(
                circulation_recipient,
                checked
            );
        };
    }
    return _cached_decoder_for_CirculationMember(el);
}

let _cached_encoder_for_CirculationMember: $.ASN1Encoder<CirculationMember> | null = null;

/**
 * @summary Encodes a(n) CirculationMember into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationMember, encoded as an ASN.1 Element.
 */
export function _encode_CirculationMember(
    value: CirculationMember,
    elGetter: $.ASN1Encoder<CirculationMember>
) {
    if (!_cached_encoder_for_CirculationMember) {
        _cached_encoder_for_CirculationMember = function (
            value: CirculationMember        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RecipientSpecifier(
                            value.circulation_recipient,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.checked === undefined
                            ? undefined
                            : _encode_Checkmark(value.checked, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CirculationMember(value, elGetter);
}


/* eslint-enable */
