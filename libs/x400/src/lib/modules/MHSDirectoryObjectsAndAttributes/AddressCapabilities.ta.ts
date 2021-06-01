/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta';
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta';
import {
    Capability,
    _decode_Capability,
    _encode_Capability,
} from '../MHSDirectoryObjectsAndAttributes/Capability.ta';
export {
    Capability,
    _decode_Capability,
    _encode_Capability,
} from '../MHSDirectoryObjectsAndAttributes/Capability.ta';

/* START_OF_SYMBOL_DEFINITION AddressCapabilities */
/**
 * @summary AddressCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddressCapabilities ::= SEQUENCE {
 *   description   GeneralString OPTIONAL,
 *   address       ORAddress,
 *   capabilities  SET OF Capability
 * }
 * ```
 *
 * @class
 */
export class AddressCapabilities {
    constructor(
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<GeneralString>,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: ORAddress,
        /**
         * @summary `capabilities`.
         * @public
         * @readonly
         */
        readonly capabilities: Capability[]
    ) {}

    /**
     * @summary Restructures an object into a AddressCapabilities
     * @description
     *
     * This takes an `object` and converts it to a `AddressCapabilities`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddressCapabilities`.
     * @returns {AddressCapabilities}
     */
    public static _from_object(
        _o: { [_K in keyof AddressCapabilities]: AddressCapabilities[_K] }
    ): AddressCapabilities {
        return new AddressCapabilities(
            _o.description,
            _o.address,
            _o.capabilities
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddressCapabilities */
/**
 * @summary The Leading Root Component Types of AddressCapabilities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddressCapabilities: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'description',
        true,
        $.hasTag(_TagClass.universal, 27),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'address',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'capabilities',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddressCapabilities */
/**
 * @summary The Trailing Root Component Types of AddressCapabilities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddressCapabilities: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddressCapabilities */
/**
 * @summary The Extension Addition Component Types of AddressCapabilities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddressCapabilities: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressCapabilities */
let _cached_decoder_for_AddressCapabilities: $.ASN1Decoder<AddressCapabilities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _decode_AddressCapabilities */
/**
 * @summary Decodes an ASN.1 element into a(n) AddressCapabilities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddressCapabilities} The decoded data structure.
 */
export function _decode_AddressCapabilities(el: _Element) {
    if (!_cached_decoder_for_AddressCapabilities) {
        _cached_decoder_for_AddressCapabilities = function (
            el: _Element
        ): AddressCapabilities {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let description: OPTIONAL<GeneralString>;
            let address!: ORAddress;
            let capabilities!: Capability[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                description: (_el: _Element): void => {
                    description = $._decodeGeneralString(_el);
                },
                address: (_el: _Element): void => {
                    address = _decode_ORAddress(_el);
                },
                capabilities: (_el: _Element): void => {
                    capabilities = $._decodeSetOf<Capability>(
                        () => _decode_Capability
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddressCapabilities,
                _extension_additions_list_spec_for_AddressCapabilities,
                _root_component_type_list_2_spec_for_AddressCapabilities,
                undefined
            );
            return new AddressCapabilities /* SEQUENCE_CONSTRUCTOR_CALL */(
                description,
                address,
                capabilities
            );
        };
    }
    return _cached_decoder_for_AddressCapabilities(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressCapabilities */
let _cached_encoder_for_AddressCapabilities: $.ASN1Encoder<AddressCapabilities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddressCapabilities */

/* START_OF_SYMBOL_DEFINITION _encode_AddressCapabilities */
/**
 * @summary Encodes a(n) AddressCapabilities into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressCapabilities, encoded as an ASN.1 Element.
 */
export function _encode_AddressCapabilities(
    value: AddressCapabilities,
    elGetter: $.ASN1Encoder<AddressCapabilities>
) {
    if (!_cached_encoder_for_AddressCapabilities) {
        _cached_encoder_for_AddressCapabilities = function (
            value: AddressCapabilities,
            elGetter: $.ASN1Encoder<AddressCapabilities>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.description === undefined
                            ? undefined
                            : $._encodeGeneralString(value.description, $.BER),
                        /* REQUIRED   */ _encode_ORAddress(
                            value.address,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<Capability>(
                            () => _encode_Capability,
                            $.BER
                        )(value.capabilities, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddressCapabilities(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddressCapabilities */

/* eslint-enable */
