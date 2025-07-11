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
    CBEFFVersion,
    _decode_CBEFFVersion,
    _encode_CBEFFVersion,
    BIRIndex,
    _decode_BIRIndex,
    _encode_BIRIndex,
    BDBValidityPeriod,
    _decode_BDBValidityPeriod,
    _encode_BDBValidityPeriod,
    Quality,
    _decode_Quality,
    _encode_Quality,
    EncryptionOptions,
    _decode_EncryptionOptions,
    _encode_EncryptionOptions,
    IntegrityOptions,
    _decode_IntegrityOptions,
    _encode_IntegrityOptions,
    BDBFormat,
    _decode_BDBFormat,
    _encode_BDBFormat,
} from '@wildboar/cbeff';

/**
 * @summary SBHForBRTC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SBHForBRTC ::= SEQUENCE {
 *     version                 CBEFFVersion,
 *     brtcIndex               BIRIndex,
 *     brtcValidityPeriod      BDBValidityPeriod,
 *     brtQuality              Quality,
 *     bdbEncryptionOptions    EncryptionOptions(FALSE),
 *     bdbIntegrityOptions     IntegrityOptions(FALSE),
 *     bdbFormatForBRTC        BDBFormat }
 * ```
 *
 */
export class SBHForBRTC {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CBEFFVersion,
        /**
         * @summary `brtcIndex`.
         * @public
         * @readonly
         */
        readonly brtcIndex: BIRIndex,
        /**
         * @summary `brtcValidityPeriod`.
         * @public
         * @readonly
         */
        readonly brtcValidityPeriod: BDBValidityPeriod,
        /**
         * @summary `brtQuality`.
         * @public
         * @readonly
         */
        readonly brtQuality: Quality,
        /**
         * @summary `bdbEncryptionOptions`.
         * @public
         * @readonly
         */
        readonly bdbEncryptionOptions: EncryptionOptions,
        /**
         * @summary `bdbIntegrityOptions`.
         * @public
         * @readonly
         */
        readonly bdbIntegrityOptions: IntegrityOptions,
        /**
         * @summary `bdbFormatForBRTC`.
         * @public
         * @readonly
         */
        readonly bdbFormatForBRTC: BDBFormat
    ) {}

    /**
     * @summary Restructures an object into a SBHForBRTC
     * @description
     *
     * This takes an `object` and converts it to a `SBHForBRTC`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBHForBRTC`.
     * @returns {SBHForBRTC}
     */
    public static _from_object(
        _o: { [_K in keyof SBHForBRTC]: SBHForBRTC[_K] }
    ): SBHForBRTC {
        return new SBHForBRTC(
            _o.version,
            _o.brtcIndex,
            _o.brtcValidityPeriod,
            _o.brtQuality,
            _o.bdbEncryptionOptions,
            _o.bdbIntegrityOptions,
            _o.bdbFormatForBRTC
        );
    }
}


/**
 * @summary The Leading Root Component Types of SBHForBRTC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SBHForBRTC: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'brtcIndex',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'brtcValidityPeriod',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'brtQuality',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'bdbEncryptionOptions',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'bdbIntegrityOptions',
        false,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'bdbFormatForBRTC',
        false,
        $.hasTag(_TagClass.context, 6)
    ),
];


/**
 * @summary The Trailing Root Component Types of SBHForBRTC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SBHForBRTC: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SBHForBRTC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SBHForBRTC: $.ComponentSpec[] = [];


let _cached_decoder_for_SBHForBRTC: $.ASN1Decoder<SBHForBRTC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SBHForBRTC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SBHForBRTC} The decoded data structure.
 */
export function _decode_SBHForBRTC(el: _Element): SBHForBRTC {
    if (!_cached_decoder_for_SBHForBRTC) {
        _cached_decoder_for_SBHForBRTC = function (el: _Element): SBHForBRTC {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 7) {
                throw new _ConstructionError(
                    'SBHForBRTC contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'version';
            sequence[1].name = 'brtcIndex';
            sequence[2].name = 'brtcValidityPeriod';
            sequence[3].name = 'brtQuality';
            sequence[4].name = 'bdbEncryptionOptions';
            sequence[5].name = 'bdbIntegrityOptions';
            sequence[6].name = 'bdbFormatForBRTC';
            let version!: CBEFFVersion;
            let brtcIndex!: BIRIndex;
            let brtcValidityPeriod!: BDBValidityPeriod;
            let brtQuality!: Quality;
            let bdbEncryptionOptions!: EncryptionOptions;
            let bdbIntegrityOptions!: IntegrityOptions;
            let bdbFormatForBRTC!: BDBFormat;
            version = _decode_CBEFFVersion(sequence[0]);
            brtcIndex = _decode_BIRIndex(sequence[1]);
            brtcValidityPeriod = _decode_BDBValidityPeriod(sequence[2]);
            brtQuality = _decode_Quality(sequence[3]);
            bdbEncryptionOptions = _decode_EncryptionOptions(sequence[4]);
            bdbIntegrityOptions = _decode_IntegrityOptions(sequence[5]);
            bdbFormatForBRTC = _decode_BDBFormat(sequence[6]);
            return new SBHForBRTC(
                version,
                brtcIndex,
                brtcValidityPeriod,
                brtQuality,
                bdbEncryptionOptions,
                bdbIntegrityOptions,
                bdbFormatForBRTC
            );
        };
    }
    return _cached_decoder_for_SBHForBRTC(el);
}


let _cached_encoder_for_SBHForBRTC: $.ASN1Encoder<SBHForBRTC> | null = null;


/**
 * @summary Encodes a(n) SBHForBRTC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBHForBRTC, encoded as an ASN.1 Element.
 */
export function _encode_SBHForBRTC(
    value: SBHForBRTC,
    elGetter: $.ASN1Encoder<SBHForBRTC>
): _Element {
    if (!_cached_encoder_for_SBHForBRTC) {
        _cached_encoder_for_SBHForBRTC = function (
            value: SBHForBRTC        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CBEFFVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BIRIndex(
                            value.brtcIndex,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BDBValidityPeriod(
                            value.brtcValidityPeriod,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Quality(
                            value.brtQuality,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptionOptions(
                            value.bdbEncryptionOptions,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_IntegrityOptions(
                            value.bdbIntegrityOptions,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_BDBFormat(
                            value.bdbFormatForBRTC,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SBHForBRTC(value, elGetter);
}


/* eslint-enable */
