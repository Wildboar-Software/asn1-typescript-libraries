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

/* START_OF_SYMBOL_DEFINITION RemoveTpsResultInformation */
/**
 * @summary RemoveTpsResultInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsResultInformation ::= SEQUENCE {
 *   deletedTpPoolOrGTP  ObjectInstance OPTIONAL,
 *   tps                 SET OF ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class RemoveTpsResultInformation {
    constructor(
        /**
         * @summary `deletedTpPoolOrGTP`.
         * @public
         * @readonly
         */
        readonly deletedTpPoolOrGTP: OPTIONAL<ObjectInstance>,
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a RemoveTpsResultInformation
     * @description
     *
     * This takes an `object` and converts it to a `RemoveTpsResultInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveTpsResultInformation`.
     * @returns {RemoveTpsResultInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof RemoveTpsResultInformation]: RemoveTpsResultInformation[_K];
        }
    ): RemoveTpsResultInformation {
        return new RemoveTpsResultInformation(_o.deletedTpPoolOrGTP, _o.tps);
    }
}
/* END_OF_SYMBOL_DEFINITION RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveTpsResultInformation */
/**
 * @summary The Leading Root Component Types of RemoveTpsResultInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RemoveTpsResultInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'deletedTpPoolOrGTP',
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveTpsResultInformation */
/**
 * @summary The Trailing Root Component Types of RemoveTpsResultInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RemoveTpsResultInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveTpsResultInformation */
/**
 * @summary The Extension Addition Component Types of RemoveTpsResultInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RemoveTpsResultInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsResultInformation */
let _cached_decoder_for_RemoveTpsResultInformation: $.ASN1Decoder<RemoveTpsResultInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveTpsResultInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsResultInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsResultInformation} The decoded data structure.
 */
export function _decode_RemoveTpsResultInformation(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsResultInformation) {
        _cached_decoder_for_RemoveTpsResultInformation = function (
            el: _Element
        ): RemoveTpsResultInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deletedTpPoolOrGTP: OPTIONAL<ObjectInstance>;
            let tps!: ObjectInstance[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                deletedTpPoolOrGTP: (_el: _Element): void => {
                    deletedTpPoolOrGTP = _decode_ObjectInstance(_el);
                },
                tps: (_el: _Element): void => {
                    tps = $._decodeSetOf<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RemoveTpsResultInformation,
                _extension_additions_list_spec_for_RemoveTpsResultInformation,
                _root_component_type_list_2_spec_for_RemoveTpsResultInformation,
                undefined
            );
            return new RemoveTpsResultInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                deletedTpPoolOrGTP,
                tps
            );
        };
    }
    return _cached_decoder_for_RemoveTpsResultInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsResultInformation */
let _cached_encoder_for_RemoveTpsResultInformation: $.ASN1Encoder<RemoveTpsResultInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsResultInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveTpsResultInformation */
/**
 * @summary Encodes a(n) RemoveTpsResultInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsResultInformation, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsResultInformation(
    value: RemoveTpsResultInformation,
    elGetter: $.ASN1Encoder<RemoveTpsResultInformation>
) {
    if (!_cached_encoder_for_RemoveTpsResultInformation) {
        _cached_encoder_for_RemoveTpsResultInformation = function (
            value: RemoveTpsResultInformation,
            elGetter: $.ASN1Encoder<RemoveTpsResultInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.deletedTpPoolOrGTP === undefined
                            ? undefined
                            : _encode_ObjectInstance(
                                  value.deletedTpPoolOrGTP,
                                  $.BER
                              ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.tps, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RemoveTpsResultInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveTpsResultInformation */

/* eslint-enable */
