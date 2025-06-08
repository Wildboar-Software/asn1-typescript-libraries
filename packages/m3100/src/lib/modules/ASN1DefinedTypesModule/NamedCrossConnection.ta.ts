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
    CrossConnectionName,
    _decode_CrossConnectionName,
    _encode_CrossConnectionName,
} from '../ASN1DefinedTypesModule/CrossConnectionName.ta';
export {
    CrossConnectionName,
    _decode_CrossConnectionName,
    _encode_CrossConnectionName,
} from '../ASN1DefinedTypesModule/CrossConnectionName.ta';

/* START_OF_SYMBOL_DEFINITION NamedCrossConnection */
/**
 * @summary NamedCrossConnection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedCrossConnection ::= SEQUENCE {
 *   redline  BOOLEAN,
 *   name     CrossConnectionName
 * }
 * ```
 *
 * @class
 */
export class NamedCrossConnection {
    constructor(
        /**
         * @summary `redline`.
         * @public
         * @readonly
         */
        readonly redline: BOOLEAN,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: CrossConnectionName
    ) {}

    /**
     * @summary Restructures an object into a NamedCrossConnection
     * @description
     *
     * This takes an `object` and converts it to a `NamedCrossConnection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NamedCrossConnection`.
     * @returns {NamedCrossConnection}
     */
    public static _from_object(
        _o: { [_K in keyof NamedCrossConnection]: NamedCrossConnection[_K] }
    ): NamedCrossConnection {
        return new NamedCrossConnection(_o.redline, _o.name);
    }
}
/* END_OF_SYMBOL_DEFINITION NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamedCrossConnection */
/**
 * @summary The Leading Root Component Types of NamedCrossConnection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NamedCrossConnection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'redline',
        false,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'name',
        false,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamedCrossConnection */
/**
 * @summary The Trailing Root Component Types of NamedCrossConnection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NamedCrossConnection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamedCrossConnection */
/**
 * @summary The Extension Addition Component Types of NamedCrossConnection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NamedCrossConnection: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedCrossConnection */
let _cached_decoder_for_NamedCrossConnection: $.ASN1Decoder<NamedCrossConnection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _decode_NamedCrossConnection */
/**
 * @summary Decodes an ASN.1 element into a(n) NamedCrossConnection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedCrossConnection} The decoded data structure.
 */
export function _decode_NamedCrossConnection(el: _Element) {
    if (!_cached_decoder_for_NamedCrossConnection) {
        _cached_decoder_for_NamedCrossConnection = function (
            el: _Element
        ): NamedCrossConnection {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'NamedCrossConnection contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'redline';
            sequence[1].name = 'name';
            let redline!: BOOLEAN;
            let name!: CrossConnectionName;
            redline = $._decodeBoolean(sequence[0]);
            name = _decode_CrossConnectionName(sequence[1]);
            return new NamedCrossConnection(redline, name);
        };
    }
    return _cached_decoder_for_NamedCrossConnection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedCrossConnection */
let _cached_encoder_for_NamedCrossConnection: $.ASN1Encoder<NamedCrossConnection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedCrossConnection */

/* START_OF_SYMBOL_DEFINITION _encode_NamedCrossConnection */
/**
 * @summary Encodes a(n) NamedCrossConnection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedCrossConnection, encoded as an ASN.1 Element.
 */
export function _encode_NamedCrossConnection(
    value: NamedCrossConnection,
    elGetter: $.ASN1Encoder<NamedCrossConnection>
) {
    if (!_cached_encoder_for_NamedCrossConnection) {
        _cached_encoder_for_NamedCrossConnection = function (
            value: NamedCrossConnection,
            elGetter: $.ASN1Encoder<NamedCrossConnection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeBoolean(value.redline, $.BER),
                        /* REQUIRED   */ _encode_CrossConnectionName(
                            value.name,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NamedCrossConnection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamedCrossConnection */

/* eslint-enable */
