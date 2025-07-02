/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PresentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PresentationAddress ::= SEQUENCE {
 *   pSelector   [0]  OCTET STRING OPTIONAL,
 *   sSelector   [1]  OCTET STRING OPTIONAL,
 *   tSelector   [2]  OCTET STRING OPTIONAL,
 *   nAddresses  [3]  SET SIZE (1..MAX) OF OCTET STRING,
 *   ... }
 * ```
 *
 */
export class PresentationAddress {
    constructor(
        /**
         * @summary `pSelector`.
         * @public
         * @readonly
         */
        readonly pSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `sSelector`.
         * @public
         * @readonly
         */
        readonly sSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tSelector`.
         * @public
         * @readonly
         */
        readonly tSelector: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `nAddresses`.
         * @public
         * @readonly
         */
        readonly nAddresses: OCTET_STRING[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PresentationAddress
     * @description
     *
     * This takes an `object` and converts it to a `PresentationAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresentationAddress`.
     * @returns {PresentationAddress}
     */
    public static _from_object(
        _o: { [_K in keyof PresentationAddress]: PresentationAddress[_K] }
    ): PresentationAddress {
        return new PresentationAddress(
            _o.pSelector,
            _o.sSelector,
            _o.tSelector,
            _o.nAddresses,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PresentationAddress: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "pSelector",
            true,
            $.hasTag(_TagClass.context, 0)
        ),
        new $.ComponentSpec(
            "sSelector",
            true,
            $.hasTag(_TagClass.context, 1)
        ),
        new $.ComponentSpec(
            "tSelector",
            true,
            $.hasTag(_TagClass.context, 2)
        ),
        new $.ComponentSpec(
            "nAddresses",
            false,
            $.hasTag(_TagClass.context, 3)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PresentationAddress: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of PresentationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PresentationAddress: $.ComponentSpec[] =
    [];


/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PresentationAddress} The decoded data structure.
 */
export function _decode_PresentationAddress(el: _Element): PresentationAddress {
    let pSelector: OPTIONAL<OCTET_STRING>;
    let sSelector: OPTIONAL<OCTET_STRING>;
    let tSelector: OPTIONAL<OCTET_STRING>;
    let nAddresses!: OCTET_STRING[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        pSelector: (_el: _Element): void => {
            pSelector = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(_el);
        },
        sSelector: (_el: _Element): void => {
            sSelector = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(_el);
        },
        tSelector: (_el: _Element): void => {
            tSelector = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
            )(_el);
        },
        nAddresses: (_el: _Element): void => {
            nAddresses = $._decode_explicit<OCTET_STRING[]>(() =>
                $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString)
            )(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PresentationAddress,
        _extension_additions_list_spec_for_PresentationAddress,
        _root_component_type_list_2_spec_for_PresentationAddress,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new PresentationAddress(
        pSelector,
        sSelector,
        tSelector,
        nAddresses,
        _unrecognizedExtensionsList
    );
}

/**
 * @summary Encodes a(n) PresentationAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAddress, encoded as an ASN.1 Element.
 */
export function _encode_PresentationAddress(value: PresentationAddress): _Element {
    const components: _Element[] = [];
    if (value.pSelector) {
        const c = $._encode_explicit(
            _TagClass.context,
            0,
            () => $._encodeOctetString,
            $.BER
        )(value.pSelector, $.BER);
        components.push(c);
    }
    if (value.sSelector) {
        const c = $._encode_explicit(
            _TagClass.context,
            1,
            () => $._encodeOctetString,
            $.BER
        )(value.sSelector, $.BER);
        components.push(c);
    }
    if (value.tSelector) {
        const c = $._encode_explicit(
            _TagClass.context,
            2,
            () => $._encodeOctetString,
            $.BER
        )(value.tSelector, $.BER);
        components.push(c);
    }
    components.push($._encode_explicit(
        _TagClass.context,
        3,
        () =>
            $._encodeSetOf<OCTET_STRING>(
                () => $._encodeOctetString,
                $.BER
            ),
        $.BER
    )(value.nAddresses, $.BER));
    components.push(...value._unrecognizedExtensionsList ?? []);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
