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
import * as $ from '@wildboar/asn1/functional';
import {
    SBHForBRTC,
    _decode_SBHForBRTC,
    _encode_SBHForBRTC,
} from '../AuthenticationContextForBiometrics/SBHForBRTC.ta.mjs';
import {
    BDBForBRTC,
    _decode_BDBForBRTC,
    _encode_BDBForBRTC,
} from '../AuthenticationContextForBiometrics/BDBForBRTC.ta.mjs';

/**
 * @summary BRTCContentInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCContentInformation ::= SEQUENCE {
 *     sbhForBRTC  SBHForBRTC,
 *     bdbForBRTC  BDBForBRTC }
 * ```
 *
 * @class
 */
export class BRTCContentInformation {
    constructor(
        /**
         * @summary `sbhForBRTC`.
         * @public
         * @readonly
         */
        readonly sbhForBRTC: SBHForBRTC,
        /**
         * @summary `bdbForBRTC`.
         * @public
         * @readonly
         */
        readonly bdbForBRTC: BDBForBRTC
    ) {}

    /**
     * @summary Restructures an object into a BRTCContentInformation
     * @description
     *
     * This takes an `object` and converts it to a `BRTCContentInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BRTCContentInformation`.
     * @returns {BRTCContentInformation}
     */
    public static _from_object(
        _o: { [_K in keyof BRTCContentInformation]: BRTCContentInformation[_K] }
    ): BRTCContentInformation {
        return new BRTCContentInformation(_o.sbhForBRTC, _o.bdbForBRTC);
    }
}


/**
 * @summary The Leading Root Component Types of BRTCContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BRTCContentInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sbhForBRTC',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'bdbForBRTC',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of BRTCContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BRTCContentInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BRTCContentInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BRTCContentInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_BRTCContentInformation: $.ASN1Decoder<BRTCContentInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BRTCContentInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCContentInformation} The decoded data structure.
 */
export function _decode_BRTCContentInformation(el: _Element) {
    if (!_cached_decoder_for_BRTCContentInformation) {
        _cached_decoder_for_BRTCContentInformation = function (
            el: _Element
        ): BRTCContentInformation {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'BRTCContentInformation contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'sbhForBRTC';
            sequence[1].name = 'bdbForBRTC';
            let sbhForBRTC!: SBHForBRTC;
            let bdbForBRTC!: BDBForBRTC;
            sbhForBRTC = _decode_SBHForBRTC(sequence[0]);
            bdbForBRTC = _decode_BDBForBRTC(sequence[1]);
            return new BRTCContentInformation(sbhForBRTC, bdbForBRTC);
        };
    }
    return _cached_decoder_for_BRTCContentInformation(el);
}


let _cached_encoder_for_BRTCContentInformation: $.ASN1Encoder<BRTCContentInformation> | null = null;


/**
 * @summary Encodes a(n) BRTCContentInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCContentInformation, encoded as an ASN.1 Element.
 */
export function _encode_BRTCContentInformation(
    value: BRTCContentInformation,
    elGetter: $.ASN1Encoder<BRTCContentInformation>
) {
    if (!_cached_encoder_for_BRTCContentInformation) {
        _cached_encoder_for_BRTCContentInformation = function (
            value: BRTCContentInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_SBHForBRTC(
                            value.sbhForBRTC,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BDBForBRTC(
                            value.bdbForBRTC,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BRTCContentInformation(value, elGetter);
}


/* eslint-enable */
