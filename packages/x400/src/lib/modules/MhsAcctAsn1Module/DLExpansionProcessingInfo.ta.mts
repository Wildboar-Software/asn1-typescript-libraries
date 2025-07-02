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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import {
    Actions,
    _decode_Actions,
    _encode_Actions,
} from '../MhsAcctAsn1Module/Actions.ta.mjs';
/**
 * @summary DLExpansionProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLExpansionProcessingInfo ::= SEQUENCE {
 *   dlORName  ORAddressAndOptionalDirectoryName,
 *   actions   Actions
 * }
 * ```
 *
 */
export class DLExpansionProcessingInfo {
    constructor(
        /**
         * @summary `dlORName`.
         * @public
         * @readonly
         */
        readonly dlORName: ORAddressAndOptionalDirectoryName,
        /**
         * @summary `actions`.
         * @public
         * @readonly
         */
        readonly actions: Actions
    ) {}

    /**
     * @summary Restructures an object into a DLExpansionProcessingInfo
     * @description
     *
     * This takes an `object` and converts it to a `DLExpansionProcessingInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLExpansionProcessingInfo`.
     * @returns {DLExpansionProcessingInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof DLExpansionProcessingInfo]: DLExpansionProcessingInfo[_K];
        }
    ): DLExpansionProcessingInfo {
        return new DLExpansionProcessingInfo(_o.dlORName, _o.actions);
    }
}

/**
 * @summary The Leading Root Component Types of DLExpansionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DLExpansionProcessingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dlORName',
        false,
        $.hasTag(_TagClass.application, 0)
    ),
    new $.ComponentSpec(
        'actions',
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of DLExpansionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DLExpansionProcessingInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DLExpansionProcessingInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DLExpansionProcessingInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_DLExpansionProcessingInfo: $.ASN1Decoder<DLExpansionProcessingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLExpansionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLExpansionProcessingInfo} The decoded data structure.
 */
export function _decode_DLExpansionProcessingInfo(el: _Element): DLExpansionProcessingInfo {
    if (!_cached_decoder_for_DLExpansionProcessingInfo) {
        _cached_decoder_for_DLExpansionProcessingInfo = function (
            el: _Element
        ): DLExpansionProcessingInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DLExpansionProcessingInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'dlORName';
            sequence[1].name = 'actions';
            let dlORName!: ORAddressAndOptionalDirectoryName;
            let actions!: Actions;
            dlORName = _decode_ORAddressAndOptionalDirectoryName(sequence[0]);
            actions = _decode_Actions(sequence[1]);
            return new DLExpansionProcessingInfo(dlORName, actions);
        };
    }
    return _cached_decoder_for_DLExpansionProcessingInfo(el);
}

let _cached_encoder_for_DLExpansionProcessingInfo: $.ASN1Encoder<DLExpansionProcessingInfo> | null = null;

/**
 * @summary Encodes a(n) DLExpansionProcessingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLExpansionProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_DLExpansionProcessingInfo(
    value: DLExpansionProcessingInfo,
    elGetter: $.ASN1Encoder<DLExpansionProcessingInfo>
): _Element {
    if (!_cached_encoder_for_DLExpansionProcessingInfo) {
        _cached_encoder_for_DLExpansionProcessingInfo = function (
            value: DLExpansionProcessingInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ORAddressAndOptionalDirectoryName(
                            value.dlORName,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Actions(value.actions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DLExpansionProcessingInfo(value, elGetter);
}


/* eslint-enable */
