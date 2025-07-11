/* eslint-disable */
import {
    OPTIONAL,
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
    GlobalDomainIdentifier,
    _decode_GlobalDomainIdentifier,
    _encode_GlobalDomainIdentifier,
} from '../MTSAbstractService/GlobalDomainIdentifier.ta.mjs';
import {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
import {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/InformationFramework';
/**
 * @summary ReportingMTAName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingMTAName ::= SEQUENCE {
 *   domain              GlobalDomainIdentifier,
 *   mta-name            MTAName,
 *   mta-directory-name  [0]  Name OPTIONAL
 * }
 * ```
 *
 */
export class ReportingMTAName {
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
        readonly mta_name: MTAName,
        /**
         * @summary `mta_directory_name`.
         * @public
         * @readonly
         */
        readonly mta_directory_name: OPTIONAL<Name>
    ) {}

    /**
     * @summary Restructures an object into a ReportingMTAName
     * @description
     *
     * This takes an `object` and converts it to a `ReportingMTAName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportingMTAName`.
     * @returns {ReportingMTAName}
     */
    public static _from_object(
        _o: { [_K in keyof ReportingMTAName]: ReportingMTAName[_K] }
    ): ReportingMTAName {
        return new ReportingMTAName(
            _o.domain,
            _o.mta_name,
            _o.mta_directory_name
        );
    }
}

/**
 * @summary The Leading Root Component Types of ReportingMTAName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReportingMTAName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'domain',
        false,
        $.hasTag(_TagClass.application, 3)
    ),
    new $.ComponentSpec(
        'mta-name',
        false,
        $.hasTag(_TagClass.universal, 22)
    ),
    new $.ComponentSpec(
        'mta-directory-name',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of ReportingMTAName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReportingMTAName: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReportingMTAName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReportingMTAName: $.ComponentSpec[] = [];

let _cached_decoder_for_ReportingMTAName: $.ASN1Decoder<ReportingMTAName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingMTAName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingMTAName} The decoded data structure.
 */
export function _decode_ReportingMTAName(el: _Element): ReportingMTAName {
    if (!_cached_decoder_for_ReportingMTAName) {
        _cached_decoder_for_ReportingMTAName = function (
            el: _Element
        ): ReportingMTAName {
            let domain!: GlobalDomainIdentifier;
            let mta_name!: MTAName;
            let mta_directory_name: OPTIONAL<Name>;
            const callbacks: $.DecodingMap = {
                domain: (_el: _Element): void => {
                    domain = _decode_GlobalDomainIdentifier(_el);
                },
                'mta-name': (_el: _Element): void => {
                    mta_name = _decode_MTAName(_el);
                },
                'mta-directory-name': (_el: _Element): void => {
                    mta_directory_name = $._decode_explicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReportingMTAName,
                _extension_additions_list_spec_for_ReportingMTAName,
                _root_component_type_list_2_spec_for_ReportingMTAName,
                undefined
            );
            return new ReportingMTAName (
                domain,
                mta_name,
                mta_directory_name
            );
        };
    }
    return _cached_decoder_for_ReportingMTAName(el);
}

let _cached_encoder_for_ReportingMTAName: $.ASN1Encoder<ReportingMTAName> | null = null;

/**
 * @summary Encodes a(n) ReportingMTAName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingMTAName, encoded as an ASN.1 Element.
 */
export function _encode_ReportingMTAName(
    value: ReportingMTAName,
    elGetter: $.ASN1Encoder<ReportingMTAName>
): _Element {
    if (!_cached_encoder_for_ReportingMTAName) {
        _cached_encoder_for_ReportingMTAName = function (
            value: ReportingMTAName        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GlobalDomainIdentifier(
                            value.domain,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MTAName(value.mta_name, $.BER),
                        /* IF_ABSENT  */ value.mta_directory_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Name,
                                  $.BER
                              )(value.mta_directory_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ReportingMTAName(value, elGetter);
}


/* eslint-enable */
