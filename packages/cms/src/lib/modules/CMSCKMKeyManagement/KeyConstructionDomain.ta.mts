/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DomainMaintenanceLevel,
    _decode_DomainMaintenanceLevel,
    _encode_DomainMaintenanceLevel,
} from "../CMSCKMKeyManagement/DomainMaintenanceLevel.ta.mjs";
import {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../CMSCKMKeyManagement/DomainName.ta.mjs";
import {
    DomainParams,
    _decode_DomainParams,
    _encode_DomainParams,
} from "../CMSCKMKeyManagement/DomainParams.ta.mjs";

/**
 * @summary KeyConstructionDomain
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionDomain ::= SEQUENCE {
 * domainName             DomainName,
 * domainMaintenanceLevel     DomainMaintenanceLevel,
 * domainParams         DomainParams OPTIONAL
 *  -- From ANS X9.42 and ANS X.9.62 --
 * }
 * ```
 *
 */
export class KeyConstructionDomain {
    constructor(
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: DomainName,
        /**
         * @summary `domainMaintenanceLevel`.
         * @public
         * @readonly
         */
        readonly domainMaintenanceLevel: DomainMaintenanceLevel,
        /**
         * @summary `domainParams`.
         * @public
         * @readonly
         */
        readonly domainParams: OPTIONAL<DomainParams>
    ) {}

    /**
     * @summary Restructures an object into a KeyConstructionDomain
     * @description
     *
     * This takes an `object` and converts it to a `KeyConstructionDomain`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyConstructionDomain`.
     * @returns {KeyConstructionDomain}
     */
    public static _from_object(
        _o: { [_K in keyof KeyConstructionDomain]: KeyConstructionDomain[_K] }
    ): KeyConstructionDomain {
        return new KeyConstructionDomain(
            _o.domainName,
            _o.domainMaintenanceLevel,
            _o.domainParams
        );
    }
}


/**
 * @summary The Leading Root Component Types of KeyConstructionDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyConstructionDomain: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "domainName",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        "domainMaintenanceLevel",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "domainParams",
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of KeyConstructionDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyConstructionDomain: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyConstructionDomain
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyConstructionDomain: $.ComponentSpec[] = [];


let _cached_decoder_for_KeyConstructionDomain: $.ASN1Decoder<KeyConstructionDomain> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionDomain
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionDomain} The decoded data structure.
 */
export function _decode_KeyConstructionDomain(el: _Element): KeyConstructionDomain {
    if (!_cached_decoder_for_KeyConstructionDomain) {
        _cached_decoder_for_KeyConstructionDomain = function (
            el: _Element
        ): KeyConstructionDomain {
            let domainName!: DomainName;
            let domainMaintenanceLevel!: DomainMaintenanceLevel;
            let domainParams: OPTIONAL<DomainParams>;
            const callbacks: $.DecodingMap = {
                domainName: (_el: _Element): void => {
                    domainName = _decode_DomainName(_el);
                },
                domainMaintenanceLevel: (_el: _Element): void => {
                    domainMaintenanceLevel = _decode_DomainMaintenanceLevel(
                        _el
                    );
                },
                domainParams: (_el: _Element): void => {
                    domainParams = _decode_DomainParams(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyConstructionDomain,
                _extension_additions_list_spec_for_KeyConstructionDomain,
                _root_component_type_list_2_spec_for_KeyConstructionDomain,
                undefined
            );
            return new KeyConstructionDomain (
                domainName,
                domainMaintenanceLevel,
                domainParams
            );
        };
    }
    return _cached_decoder_for_KeyConstructionDomain(el);
}


let _cached_encoder_for_KeyConstructionDomain: $.ASN1Encoder<KeyConstructionDomain> | null = null;


/**
 * @summary Encodes a(n) KeyConstructionDomain into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionDomain, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionDomain(
    value: KeyConstructionDomain,
    elGetter: $.ASN1Encoder<KeyConstructionDomain>
): _Element {
    if (!_cached_encoder_for_KeyConstructionDomain) {
        _cached_encoder_for_KeyConstructionDomain = function (
            value: KeyConstructionDomain        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DomainName(
                            value.domainName,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_DomainMaintenanceLevel(
                            value.domainMaintenanceLevel,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.domainParams === undefined
                            ? undefined
                            : _encode_DomainParams(value.domainParams, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_KeyConstructionDomain(value, elGetter);
}


/* eslint-enable */
