/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
/**
 * @summary TransferInfo
 * @description
 *
 * Optional deliver-action field selecting how software is copied to
 * the target. `transferProtocol` is an `&id` from `TransferInfoSet`;
 * `protocolSpecificInfo` is the matching `&Value`. Cor.2 replaced
 * `TransferProtocol` plus `ANY DEFINED BY` with this
 * `SWMF-TRANSFER` form. ITU-T Rec. X.744 (10/96)
 * [§8.1.4](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * §9.3 Table 7; Cor.2 (02/2000)
 * [item 5](https://www.itu.int/rec/T-REC-X.744-200002-I_Cor2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferInfo ::= SEQUENCE {
 *   transferProtocol      SWMF-TRANSFER.&id({TransferInfoSet}),
 *   protocolSpecificInfo
 *     SWMF-TRANSFER.&Value({TransferInfoSet}{@.transferProtocol})
 * }
 * ```
 *
 */
export class TransferInfo {
    constructor(
        /**
         * @summary `transferProtocol`.
         * @description
         *
         * OID of the chosen transfer mechanism (`SWMF-TRANSFER.&id`
         * constrained by `TransferInfoSet`). ITU-T Rec. X.744 Cor.2
         * (02/2000) item 5.
         * @public
         * @readonly
         */
        readonly transferProtocol: OBJECT_IDENTIFIER,
        /**
         * @summary `protocolSpecificInfo`.
         * @description
         *
         * Protocol-specific parameters (`SWMF-TRANSFER.&Value` for
         * `transferProtocol`). ITU-T Rec. X.744 Cor.2 (02/2000)
         * item 5.
         * @public
         * @readonly
         */
        readonly protocolSpecificInfo: _Element
    ) {}

    /**
     * @summary Restructures an object into a TransferInfo
     * @description
     *
     * This takes an `object` and converts it to a `TransferInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransferInfo`.
     * @returns {TransferInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TransferInfo]: TransferInfo[_K] }
    ): TransferInfo {
        return new TransferInfo(_o.transferProtocol, _o.protocolSpecificInfo);
    }
}

/**
 * @summary The Leading Root Component Types of TransferInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TransferInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'transferProtocol',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'protocolSpecificInfo',
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of TransferInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TransferInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TransferInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TransferInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_TransferInfo: $.ASN1Decoder<TransferInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferInfo} The decoded data structure.
 */
export function _decode_TransferInfo(el: _Element): TransferInfo {
    if (!_cached_decoder_for_TransferInfo) {
        _cached_decoder_for_TransferInfo = function (
            el: _Element
        ): TransferInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TransferInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'transferProtocol';
            sequence[1].name = 'protocolSpecificInfo';
            let transferProtocol!: OBJECT_IDENTIFIER;
            let protocolSpecificInfo!: _Element;
            transferProtocol = $._decodeObjectIdentifier(sequence[0]);
            protocolSpecificInfo = $._decodeAny(sequence[1]);
            return new TransferInfo(transferProtocol, protocolSpecificInfo);
        };
    }
    return _cached_decoder_for_TransferInfo(el);
}

let _cached_encoder_for_TransferInfo: $.ASN1Encoder<TransferInfo> | null = null;

/**
 * @summary Encodes a(n) TransferInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferInfo, encoded as an ASN.1 Element.
 */
export function _encode_TransferInfo(
    value: TransferInfo,
    elGetter: $.ASN1Encoder<TransferInfo>
): _Element {
    if (!_cached_encoder_for_TransferInfo) {
        _cached_encoder_for_TransferInfo = function (
            value: TransferInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.transferProtocol,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.protocolSpecificInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TransferInfo(value, elGetter);
}


/* eslint-enable */
