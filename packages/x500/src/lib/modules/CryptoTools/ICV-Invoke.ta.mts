/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "@wildboar/pki-stub";
/**
 * @summary ICV_Invoke
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ICV-Invoke{ToBeProtected} ::= SEQUENCE {
 *   toBeProtected      ToBeProtected,
 *   dynParms       [0] AlgoInvoke{{SupportedIcvAlgorithms}} OPTIONAL,
 *   icv                BIT STRING,
 *   ... }
 * ```
 *
 */
export class ICV_Invoke<ToBeProtected> {
    constructor(
        /**
         * @summary `toBeProtected`.
         * @public
         * @readonly
         */
        readonly toBeProtected: ToBeProtected,
        /**
         * @summary `dynParms`.
         * @public
         * @readonly
         */
        readonly dynParms: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `icv`.
         * @public
         * @readonly
         */
        readonly icv: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ICV_Invoke
     * @description
     *
     * This takes an `object` and converts it to a `ICV_Invoke`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ICV_Invoke`.
     * @returns {ICV_Invoke}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ICV_Invoke<any>]: ICV_Invoke<any>[_K] }>
    ): ICV_Invoke<any> {
        return new ICV_Invoke(
            _o.toBeProtected,
            _o.dynParms,
            _o.icv,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ICV_Invoke: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "toBeProtected",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "dynParms",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "icv",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ICV_Invoke: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ICV_Invoke
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ICV_Invoke: $.ComponentSpec[] = [];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ICV_Invoke
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ICV_Invoke<ToBeProtected>(
    _decode_ToBeProtected: $.ASN1Decoder<ToBeProtected>
): $.ASN1Decoder<ICV_Invoke<ToBeProtected>> {
    return function (el: _Element): ICV_Invoke<ToBeProtected> {
        let toBeProtected!: ToBeProtected;
        let dynParms: OPTIONAL<AlgoInvoke>;
        let icv!: BIT_STRING;
        let _unrecognizedExtensionsList: _Element[] = [];
        const callbacks: $.DecodingMap = {
            toBeProtected: (_el: _Element): void => {
                toBeProtected = _decode_ToBeProtected(_el);
            },
            dynParms: (_el: _Element): void => {
                dynParms = $._decode_implicit<AlgoInvoke>(
                    () => _decode_AlgoInvoke
                )(_el);
            },
            icv: (_el: _Element): void => {
                icv = $._decodeBitString(_el);
            },
        };
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_ICV_Invoke,
            _extension_additions_list_spec_for_ICV_Invoke,
            _root_component_type_list_2_spec_for_ICV_Invoke,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        return new ICV_Invoke(
            toBeProtected,
            dynParms,
            icv,
            _unrecognizedExtensionsList
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) ICV_Invoke into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ICV_Invoke as an ASN.1 element.
 */
export function _get_encoder_for_ICV_Invoke<ToBeProtected>(
    _encode_ToBeProtected: $.ASN1Encoder<ToBeProtected>
): $.ASN1Encoder<ICV_Invoke<ToBeProtected>> {
    return function (
        value: ICV_Invoke<ToBeProtected>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeProtected(
                            value.toBeProtected,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.dynParms === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgoInvoke,
                                  $.DER
                              )(value.dynParms, $.DER),
                        /* REQUIRED   */ $._encodeBitString(value.icv, $.DER),
                    ],
                    value._unrecognizedExtensionsList
                        ? value._unrecognizedExtensionsList
                        : []
                )
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
        );
    };
}

/* eslint-enable */
