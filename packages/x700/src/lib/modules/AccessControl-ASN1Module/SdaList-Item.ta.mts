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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SecurityDomainAuthorityName,
    _decode_SecurityDomainAuthorityName,
    _encode_SecurityDomainAuthorityName,
} from '../AccessControl-ASN1Module/SecurityDomainAuthorityName.ta.mjs';
import {
    OperationType,
    _decode_OperationType,
    _encode_OperationType,
} from '../AccessControl-ASN1Module/OperationType.ta.mjs';

/**
 * @summary SdaList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SdaList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class SdaList_Item {
    constructor(
        /**
         * @summary `securityDomainAuthorityName`.
         * @public
         * @readonly
         */
        readonly securityDomainAuthorityName: SecurityDomainAuthorityName,
        /**
         * @summary `operationType`.
         * @public
         * @readonly
         */
        readonly operationType: OperationType
    ) {}

    /**
     * @summary Restructures an object into a SdaList_Item
     * @description
     *
     * This takes an `object` and converts it to a `SdaList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SdaList_Item`.
     * @returns {SdaList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof SdaList_Item]: SdaList_Item[_K] }
    ): SdaList_Item {
        return new SdaList_Item(
            _o.securityDomainAuthorityName,
            _o.operationType
        );
    }
}

/**
 * @summary The Leading Root Component Types of SdaList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SdaList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'securityDomainAuthorityName',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'operationType',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of SdaList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SdaList_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SdaList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SdaList_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_SdaList_Item: $.ASN1Decoder<SdaList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SdaList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SdaList_Item} The decoded data structure.
 */
export function _decode_SdaList_Item(el: _Element): SdaList_Item {
    if (!_cached_decoder_for_SdaList_Item) {
        _cached_decoder_for_SdaList_Item = function (
            el: _Element
        ): SdaList_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'SdaList-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'securityDomainAuthorityName';
            sequence[1].name = 'operationType';
            let securityDomainAuthorityName!: SecurityDomainAuthorityName;
            let operationType!: OperationType;
            securityDomainAuthorityName = _decode_SecurityDomainAuthorityName(
                sequence[0]
            );
            operationType = _decode_OperationType(sequence[1]);
            return new SdaList_Item(securityDomainAuthorityName, operationType);
        };
    }
    return _cached_decoder_for_SdaList_Item(el);
}

let _cached_encoder_for_SdaList_Item: $.ASN1Encoder<SdaList_Item> | null = null;

/**
 * @summary Encodes a(n) SdaList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SdaList_Item, encoded as an ASN.1 Element.
 */
export function _encode_SdaList_Item(
    value: SdaList_Item,
    elGetter: $.ASN1Encoder<SdaList_Item>
): _Element {
    if (!_cached_encoder_for_SdaList_Item) {
        _cached_encoder_for_SdaList_Item = function (
            value: SdaList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SecurityDomainAuthorityName(
                            value.securityDomainAuthorityName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OperationType(
                            value.operationType,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SdaList_Item(value, elGetter);
}


/* eslint-enable */
