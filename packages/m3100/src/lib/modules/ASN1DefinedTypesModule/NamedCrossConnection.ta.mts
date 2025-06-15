/* eslint-disable */
import {
    BOOLEAN,
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
    CrossConnectionName,
    _decode_CrossConnectionName,
    _encode_CrossConnectionName,
} from '../ASN1DefinedTypesModule/CrossConnectionName.ta.mjs';

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


/**
 * @summary The Trailing Root Component Types of NamedCrossConnection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NamedCrossConnection: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NamedCrossConnection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NamedCrossConnection: $.ComponentSpec[] = [];


let _cached_decoder_for_NamedCrossConnection: $.ASN1Decoder<NamedCrossConnection> | null = null;


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


let _cached_encoder_for_NamedCrossConnection: $.ASN1Encoder<NamedCrossConnection> | null = null;


/**
 * @summary Encodes a(n) NamedCrossConnection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedCrossConnection, encoded as an ASN.1 Element.
 */
export function _encode_NamedCrossConnection(
    value: NamedCrossConnection,
    elGetter: $.ASN1Encoder<NamedCrossConnection>
) {
    if (!_cached_encoder_for_NamedCrossConnection) {
        _cached_encoder_for_NamedCrossConnection = function (
            value: NamedCrossConnection        ): _Element {
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


/* eslint-enable */
