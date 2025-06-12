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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.js';

/* START_OF_SYMBOL_DEFINITION AddNWTTPsToAccessGroupInformation */
/**
 * @summary AddNWTTPsToAccessGroupInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddNWTTPsToAccessGroupInformation ::= SEQUENCE {
 *   nwTTPs       SET OF ObjectInstance,
 *   accessGroup  ObjectInstance OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AddNWTTPsToAccessGroupInformation {
    constructor(
        /**
         * @summary `nwTTPs`.
         * @public
         * @readonly
         */
        readonly nwTTPs: ObjectInstance[],
        /**
         * @summary `accessGroup`.
         * @public
         * @readonly
         */
        readonly accessGroup: OPTIONAL<ObjectInstance>
    ) {}

    /**
     * @summary Restructures an object into a AddNWTTPsToAccessGroupInformation
     * @description
     *
     * This takes an `object` and converts it to a `AddNWTTPsToAccessGroupInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddNWTTPsToAccessGroupInformation`.
     * @returns {AddNWTTPsToAccessGroupInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddNWTTPsToAccessGroupInformation]: AddNWTTPsToAccessGroupInformation[_K];
        }
    ): AddNWTTPsToAccessGroupInformation {
        return new AddNWTTPsToAccessGroupInformation(_o.nwTTPs, _o.accessGroup);
    }
}
/* END_OF_SYMBOL_DEFINITION AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupInformation */
/**
 * @summary The Leading Root Component Types of AddNWTTPsToAccessGroupInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'nwTTPs',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec('accessGroup', true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupInformation */
/**
 * @summary The Trailing Root Component Types of AddNWTTPsToAccessGroupInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddNWTTPsToAccessGroupInformation */
/**
 * @summary The Extension Addition Component Types of AddNWTTPsToAccessGroupInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddNWTTPsToAccessGroupInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddNWTTPsToAccessGroupInformation */
let _cached_decoder_for_AddNWTTPsToAccessGroupInformation: $.ASN1Decoder<AddNWTTPsToAccessGroupInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AddNWTTPsToAccessGroupInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AddNWTTPsToAccessGroupInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddNWTTPsToAccessGroupInformation} The decoded data structure.
 */
export function _decode_AddNWTTPsToAccessGroupInformation(el: _Element) {
    if (!_cached_decoder_for_AddNWTTPsToAccessGroupInformation) {
        _cached_decoder_for_AddNWTTPsToAccessGroupInformation = function (
            el: _Element
        ): AddNWTTPsToAccessGroupInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nwTTPs!: ObjectInstance[];
            let accessGroup: OPTIONAL<ObjectInstance>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                nwTTPs: (_el: _Element): void => {
                    nwTTPs = $._decodeSetOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                accessGroup: (_el: _Element): void => {
                    accessGroup = _decode_ObjectInstance(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddNWTTPsToAccessGroupInformation,
                _extension_additions_list_spec_for_AddNWTTPsToAccessGroupInformation,
                _root_component_type_list_2_spec_for_AddNWTTPsToAccessGroupInformation,
                undefined
            );
            return new AddNWTTPsToAccessGroupInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                nwTTPs,
                accessGroup
            );
        };
    }
    return _cached_decoder_for_AddNWTTPsToAccessGroupInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddNWTTPsToAccessGroupInformation */
let _cached_encoder_for_AddNWTTPsToAccessGroupInformation: $.ASN1Encoder<AddNWTTPsToAccessGroupInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddNWTTPsToAccessGroupInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AddNWTTPsToAccessGroupInformation */
/**
 * @summary Encodes a(n) AddNWTTPsToAccessGroupInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddNWTTPsToAccessGroupInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddNWTTPsToAccessGroupInformation(
    value: AddNWTTPsToAccessGroupInformation,
    elGetter: $.ASN1Encoder<AddNWTTPsToAccessGroupInformation>
) {
    if (!_cached_encoder_for_AddNWTTPsToAccessGroupInformation) {
        _cached_encoder_for_AddNWTTPsToAccessGroupInformation = function (
            value: AddNWTTPsToAccessGroupInformation,
            elGetter: $.ASN1Encoder<AddNWTTPsToAccessGroupInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.nwTTPs, $.BER),
                        /* IF_ABSENT  */ value.accessGroup === undefined
                            ? undefined
                            : _encode_ObjectInstance(value.accessGroup, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddNWTTPsToAccessGroupInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AddNWTTPsToAccessGroupInformation */

/* eslint-enable */
