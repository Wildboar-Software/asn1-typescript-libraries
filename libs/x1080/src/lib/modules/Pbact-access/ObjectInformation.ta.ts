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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta';
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta';
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta';

/* START_OF_SYMBOL_DEFINITION ObjectInformation */
/**
 * @summary ObjectInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectInformation ::= SEQUENCE {
 *   name   DistinguishedName,
 *   info   SET SIZE (1..MAX) OF Attribute {{SupportedAttributes}},
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectInformation {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: DistinguishedName,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: Attribute[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectInformation
     * @description
     *
     * This takes an `object` and converts it to a `ObjectInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectInformation`.
     * @returns {ObjectInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ObjectInformation]: ObjectInformation[_K] }
    ): ObjectInformation {
        return new ObjectInformation(
            _o.name,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectInformation */
/**
 * @summary The Leading Root Component Types of ObjectInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'name',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'info',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectInformation */
/**
 * @summary The Trailing Root Component Types of ObjectInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectInformation */
/**
 * @summary The Extension Addition Component Types of ObjectInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectInformation */
let _cached_decoder_for_ObjectInformation: $.ASN1Decoder<ObjectInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectInformation} The decoded data structure.
 */
export function _decode_ObjectInformation(el: _Element) {
    if (!_cached_decoder_for_ObjectInformation) {
        _cached_decoder_for_ObjectInformation = function (
            el: _Element
        ): ObjectInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ObjectInformation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'name';
            sequence[1].name = 'info';
            let name!: DistinguishedName;
            let info!: Attribute[];
            name = _decode_DistinguishedName(sequence[0]);
            info = $._decodeSetOf<Attribute>(() => _decode_Attribute)(
                sequence[1]
            );
            return new ObjectInformation(name, info, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ObjectInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectInformation */
let _cached_encoder_for_ObjectInformation: $.ASN1Encoder<ObjectInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectInformation */
/**
 * @summary Encodes a(n) ObjectInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectInformation, encoded as an ASN.1 Element.
 */
export function _encode_ObjectInformation(
    value: ObjectInformation,
    elGetter: $.ASN1Encoder<ObjectInformation>
) {
    if (!_cached_encoder_for_ObjectInformation) {
        _cached_encoder_for_ObjectInformation = function (
            value: ObjectInformation,
            elGetter: $.ASN1Encoder<ObjectInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.name,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<Attribute>(
                                () => _encode_Attribute,
                                $.BER
                            )(value.info, $.BER),
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
    return _cached_encoder_for_ObjectInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectInformation */

/* eslint-enable */
