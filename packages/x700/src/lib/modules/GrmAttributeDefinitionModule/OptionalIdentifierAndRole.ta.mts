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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    OptionalIdentifier,
    _decode_OptionalIdentifier,
    _encode_OptionalIdentifier,
} from '../GrmAttributeDefinitionModule/OptionalIdentifier.ta.mjs';
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../DefinitionASN1Module/Identifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION OptionalIdentifierAndRole */
/**
 * @summary OptionalIdentifierAndRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OptionalIdentifierAndRole ::= SEQUENCE {
 *   optionalOperationName  OptionalIdentifier,
 *   optionalRoleName       Identifier OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class OptionalIdentifierAndRole {
    constructor(
        /**
         * @summary `optionalOperationName`.
         * @public
         * @readonly
         */
        readonly optionalOperationName: OptionalIdentifier,
        /**
         * @summary `optionalRoleName`.
         * @public
         * @readonly
         */
        readonly optionalRoleName: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a OptionalIdentifierAndRole
     * @description
     *
     * This takes an `object` and converts it to a `OptionalIdentifierAndRole`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OptionalIdentifierAndRole`.
     * @returns {OptionalIdentifierAndRole}
     */
    public static _from_object(
        _o: {
            [_K in keyof OptionalIdentifierAndRole]: OptionalIdentifierAndRole[_K];
        }
    ): OptionalIdentifierAndRole {
        return new OptionalIdentifierAndRole(
            _o.optionalOperationName,
            _o.optionalRoleName
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalIdentifierAndRole */
/**
 * @summary The Leading Root Component Types of OptionalIdentifierAndRole
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OptionalIdentifierAndRole: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'optionalOperationName',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'optionalRoleName',
        true,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalIdentifierAndRole */
/**
 * @summary The Trailing Root Component Types of OptionalIdentifierAndRole
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OptionalIdentifierAndRole: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalIdentifierAndRole */
/**
 * @summary The Extension Addition Component Types of OptionalIdentifierAndRole
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OptionalIdentifierAndRole: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalIdentifierAndRole */
let _cached_decoder_for_OptionalIdentifierAndRole: $.ASN1Decoder<OptionalIdentifierAndRole> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _decode_OptionalIdentifierAndRole */
/**
 * @summary Decodes an ASN.1 element into a(n) OptionalIdentifierAndRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OptionalIdentifierAndRole} The decoded data structure.
 */
export function _decode_OptionalIdentifierAndRole(el: _Element) {
    if (!_cached_decoder_for_OptionalIdentifierAndRole) {
        _cached_decoder_for_OptionalIdentifierAndRole = function (
            el: _Element
        ): OptionalIdentifierAndRole {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let optionalOperationName!: OptionalIdentifier;
            let optionalRoleName: OPTIONAL<Identifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                optionalOperationName: (_el: _Element): void => {
                    optionalOperationName = _decode_OptionalIdentifier(_el);
                },
                optionalRoleName: (_el: _Element): void => {
                    optionalRoleName = _decode_Identifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OptionalIdentifierAndRole,
                _extension_additions_list_spec_for_OptionalIdentifierAndRole,
                _root_component_type_list_2_spec_for_OptionalIdentifierAndRole,
                undefined
            );
            return new OptionalIdentifierAndRole /* SEQUENCE_CONSTRUCTOR_CALL */(
                optionalOperationName,
                optionalRoleName
            );
        };
    }
    return _cached_decoder_for_OptionalIdentifierAndRole(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalIdentifierAndRole */
let _cached_encoder_for_OptionalIdentifierAndRole: $.ASN1Encoder<OptionalIdentifierAndRole> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OptionalIdentifierAndRole */

/* START_OF_SYMBOL_DEFINITION _encode_OptionalIdentifierAndRole */
/**
 * @summary Encodes a(n) OptionalIdentifierAndRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OptionalIdentifierAndRole, encoded as an ASN.1 Element.
 */
export function _encode_OptionalIdentifierAndRole(
    value: OptionalIdentifierAndRole,
    elGetter: $.ASN1Encoder<OptionalIdentifierAndRole>
) {
    if (!_cached_encoder_for_OptionalIdentifierAndRole) {
        _cached_encoder_for_OptionalIdentifierAndRole = function (
            value: OptionalIdentifierAndRole        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_OptionalIdentifier(
                            value.optionalOperationName,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.optionalRoleName === undefined
                            ? undefined
                            : _encode_Identifier(value.optionalRoleName, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OptionalIdentifierAndRole(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OptionalIdentifierAndRole */

/* eslint-enable */
