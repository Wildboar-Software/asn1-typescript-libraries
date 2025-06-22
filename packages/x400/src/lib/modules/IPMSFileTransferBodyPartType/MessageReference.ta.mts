/* eslint-disable */
import {
    OPTIONAL,
    PrintableString,
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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary MessageReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageReference ::= SET {
 *   user                      [0]  ORName OPTIONAL,
 *   -- Defined in 8.5.5 of ITU-T Rec. X.411 | ISO/IEC 10021-4
 *   user-relative-identifier  [1]  PrintableString
 * }
 * ```
 *
 * @class
 */
export class MessageReference {
    constructor(
        /**
         * @summary `user`.
         * @public
         * @readonly
         */
        readonly user: OPTIONAL<ORName>,
        /**
         * @summary `user_relative_identifier`.
         * @public
         * @readonly
         */
        readonly user_relative_identifier: PrintableString
    ) {}

    /**
     * @summary Restructures an object into a MessageReference
     * @description
     *
     * This takes an `object` and converts it to a `MessageReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageReference`.
     * @returns {MessageReference}
     */
    public static _from_object(
        _o: { [_K in keyof MessageReference]: MessageReference[_K] }
    ): MessageReference {
        return new MessageReference(_o.user, _o.user_relative_identifier);
    }
}

/**
 * @summary The Leading Root Component Types of MessageReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'user-relative-identifier',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageReference: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageReference: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageReference: $.ASN1Decoder<MessageReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageReference} The decoded data structure.
 */
export function _decode_MessageReference(el: _Element) {
    if (!_cached_decoder_for_MessageReference) {
        _cached_decoder_for_MessageReference = function (
            el: _Element
        ): MessageReference {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let user: OPTIONAL<ORName>;
            let user_relative_identifier!: PrintableString;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                user: (_el: _Element): void => {
                    user = $._decode_implicit<ORName>(() => _decode_ORName)(
                        _el
                    );
                },
                'user-relative-identifier': (_el: _Element): void => {
                    user_relative_identifier = $._decode_implicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageReference,
                _extension_additions_list_spec_for_MessageReference,
                _root_component_type_list_2_spec_for_MessageReference,
                undefined
            );
            return new MessageReference /* SET_CONSTRUCTOR_CALL */(
                user,
                user_relative_identifier
            );
        };
    }
    return _cached_decoder_for_MessageReference(el);
}

let _cached_encoder_for_MessageReference: $.ASN1Encoder<MessageReference> | null = null;

/**
 * @summary Encodes a(n) MessageReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageReference, encoded as an ASN.1 Element.
 */
export function _encode_MessageReference(
    value: MessageReference,
    elGetter: $.ASN1Encoder<MessageReference>
) {
    if (!_cached_encoder_for_MessageReference) {
        _cached_encoder_for_MessageReference = function (
            value: MessageReference        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.user === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ORName,
                                  $.BER
                              )(value.user, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodePrintableString,
                            $.BER
                        )(value.user_relative_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageReference(value, elGetter);
}


/* eslint-enable */
