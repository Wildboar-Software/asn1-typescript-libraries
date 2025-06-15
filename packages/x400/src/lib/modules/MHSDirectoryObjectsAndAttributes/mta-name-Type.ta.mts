/* eslint-disable */
import {
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
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
import {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
/**
 * @summary mta_name_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-name-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class mta_name_Type {
    constructor(
        /**
         * @summary `domain`.
         * @public
         * @readonly
         */
        readonly domain: GlobalDomainIdentifier,
        /**
         * @summary `mta_name`.
         * @public
         * @readonly
         */
        readonly mta_name: MTAName
    ) {}

    /**
     * @summary Restructures an object into a mta_name_Type
     * @description
     *
     * This takes an `object` and converts it to a `mta_name_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `mta_name_Type`.
     * @returns {mta_name_Type}
     */
    public static _from_object(
        _o: { [_K in keyof mta_name_Type]: mta_name_Type[_K] }
    ): mta_name_Type {
        return new mta_name_Type(_o.domain, _o.mta_name);
    }
}

/**
 * @summary The Leading Root Component Types of mta_name_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_mta_name_Type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'domain',
        false,
        $.hasTag(_TagClass.application, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'mta-name',
        false,
        $.hasTag(_TagClass.universal, 22),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of mta_name_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_mta_name_Type: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of mta_name_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_mta_name_Type: $.ComponentSpec[] = [];

let _cached_decoder_for_mta_name_Type: $.ASN1Decoder<mta_name_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) mta_name_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {mta_name_Type} The decoded data structure.
 */
export function _decode_mta_name_Type(el: _Element) {
    if (!_cached_decoder_for_mta_name_Type) {
        _cached_decoder_for_mta_name_Type = function (
            el: _Element
        ): mta_name_Type {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'mta-name-Type contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'domain';
            sequence[1].name = 'mta-name';
            let domain!: GlobalDomainIdentifier;
            let mta_name!: MTAName;
            domain = _decode_GlobalDomainIdentifier(sequence[0]);
            mta_name = _decode_MTAName(sequence[1]);
            return new mta_name_Type(domain, mta_name);
        };
    }
    return _cached_decoder_for_mta_name_Type(el);
}

let _cached_encoder_for_mta_name_Type: $.ASN1Encoder<mta_name_Type> | null = null;

/**
 * @summary Encodes a(n) mta_name_Type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The mta_name_Type, encoded as an ASN.1 Element.
 */
export function _encode_mta_name_Type(
    value: mta_name_Type,
    elGetter: $.ASN1Encoder<mta_name_Type>
) {
    if (!_cached_encoder_for_mta_name_Type) {
        _cached_encoder_for_mta_name_Type = function (
            value: mta_name_Type        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GlobalDomainIdentifier(
                            value.domain,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MTAName(value.mta_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_mta_name_Type(value, elGetter);
}


/* eslint-enable */
