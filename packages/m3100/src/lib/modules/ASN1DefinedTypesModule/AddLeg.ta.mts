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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    ToTermSpecifier,
    _decode_ToTermSpecifier,
    _encode_ToTermSpecifier,
} from '../ASN1DefinedTypesModule/ToTermSpecifier.ta.mjs';
export {
    ToTermSpecifier,
    _decode_ToTermSpecifier,
    _encode_ToTermSpecifier,
} from '../ASN1DefinedTypesModule/ToTermSpecifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AddLeg */
/**
 * @summary AddLeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddLeg ::= SEQUENCE {
 *   mpCrossConnection  ObjectInstance,
 *   legs               SET OF ToTermSpecifier
 * }
 * ```
 *
 * @class
 */
export class AddLeg {
    constructor(
        /**
         * @summary `mpCrossConnection`.
         * @public
         * @readonly
         */
        readonly mpCrossConnection: ObjectInstance,
        /**
         * @summary `legs`.
         * @public
         * @readonly
         */
        readonly legs: ToTermSpecifier[]
    ) {}

    /**
     * @summary Restructures an object into a AddLeg
     * @description
     *
     * This takes an `object` and converts it to a `AddLeg`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddLeg`.
     * @returns {AddLeg}
     */
    public static _from_object(
        _o: { [_K in keyof AddLeg]: AddLeg[_K] }
    ): AddLeg {
        return new AddLeg(_o.mpCrossConnection, _o.legs);
    }
}
/* END_OF_SYMBOL_DEFINITION AddLeg */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddLeg */
/**
 * @summary The Leading Root Component Types of AddLeg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddLeg: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'mpCrossConnection',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'legs',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddLeg */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddLeg */
/**
 * @summary The Trailing Root Component Types of AddLeg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddLeg: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddLeg */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddLeg */
/**
 * @summary The Extension Addition Component Types of AddLeg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddLeg: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddLeg */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddLeg */
let _cached_decoder_for_AddLeg: $.ASN1Decoder<AddLeg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddLeg */

/* START_OF_SYMBOL_DEFINITION _decode_AddLeg */
/**
 * @summary Decodes an ASN.1 element into a(n) AddLeg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddLeg} The decoded data structure.
 */
export function _decode_AddLeg(el: _Element) {
    if (!_cached_decoder_for_AddLeg) {
        _cached_decoder_for_AddLeg = function (el: _Element): AddLeg {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AddLeg contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mpCrossConnection';
            sequence[1].name = 'legs';
            let mpCrossConnection!: ObjectInstance;
            let legs!: ToTermSpecifier[];
            mpCrossConnection = _decode_ObjectInstance(sequence[0]);
            legs = $._decodeSetOf<ToTermSpecifier>(
                () => _decode_ToTermSpecifier
            )(sequence[1]);
            return new AddLeg(mpCrossConnection, legs);
        };
    }
    return _cached_decoder_for_AddLeg(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddLeg */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddLeg */
let _cached_encoder_for_AddLeg: $.ASN1Encoder<AddLeg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddLeg */

/* START_OF_SYMBOL_DEFINITION _encode_AddLeg */
/**
 * @summary Encodes a(n) AddLeg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddLeg, encoded as an ASN.1 Element.
 */
export function _encode_AddLeg(value: AddLeg, elGetter: $.ASN1Encoder<AddLeg>) {
    if (!_cached_encoder_for_AddLeg) {
        _cached_encoder_for_AddLeg = function (
            value: AddLeg,
            elGetter: $.ASN1Encoder<AddLeg>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpCrossConnection,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ToTermSpecifier>(
                            () => _encode_ToTermSpecifier,
                            $.BER
                        )(value.legs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddLeg(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddLeg */

/* eslint-enable */
