/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AccessPointInformation,
    _decode_AccessPointInformation,
    _encode_AccessPointInformation,
} from "../DistributedOperations/AccessPointInformation.ta.mjs";
import {
    Exclusions,
    _decode_Exclusions,
    _encode_Exclusions,
} from "../DistributedOperations/Exclusions.ta.mjs";
import {
    OperationProgress,
    _decode_OperationProgress,
    _encode_OperationProgress,
} from "../DistributedOperations/OperationProgress.ta.mjs";
import {
    ReferenceType,
    _decode_ReferenceType,
    _encode_ReferenceType,
    _enum_for_ReferenceType,
} from "../DistributedOperations/ReferenceType.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary ContinuationReference
 * @description
 *
 * How to continue at other servers. DUA must not follow a CR identical
 * to one already used for this request. `aliasedRDNs` 1988 only; 1993+
 * omit. `accessPoints` SET OF, more than one item only for NSSRs.
 * `entryOnly` for oneLevel Search + alias as immediate subordinate.
 * `returnToDUA` ⇒ DUA should bind directly; may set `referenceType`
 * `self`. `nameResolveOnMaster` after NSSRs. `rdnsResolved` = RDNs
 * resolved via internal refs only.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContinuationReference ::= SET {
 *   targetObject         [0]  Name,
 *   aliasedRDNs          [1]  INTEGER OPTIONAL, -- only present in first edition systems
 *   operationProgress    [2]  OperationProgress,
 *   rdnsResolved         [3]  INTEGER OPTIONAL,
 *   referenceType        [4]  ReferenceType,
 *   accessPoints         [5]  SET OF AccessPointInformation,
 *   entryOnly            [6]  BOOLEAN DEFAULT FALSE,
 *   exclusions           [7]  Exclusions OPTIONAL,
 *   returnToDUA          [8]  BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster  [9]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 */
export class ContinuationReference {
    constructor(
        /**
         * @summary `targetObject`.
         * @description
         *
         * Name to use when continuing (may differ from incoming
         * `targetObject` after alias deref or after locating a Search
         * base).
         *
         * @public
         * @readonly
         */
        readonly targetObject: Name,
        /**
         * @summary `aliasedRDNs`.
         * @description
         *
         * How many RDNs of `targetObject` came from alias deref. Present
         * only if an alias was dereferenced. 1988 compatibility; 1993+
         * shall not include this in CommonArguments.
         *
         * @public
         * @readonly
         */
        readonly aliasedRDNs: OPTIONAL<INTEGER>,
        /**
         * @summary `operationProgress`.
         * @description
         *
         * How much name resolution is done; governs the next DSA/DUA if the
         * CR is followed.
         *
         * @public
         * @readonly
         */
        readonly operationProgress: OperationProgress,
        /**
         * @summary `rdnsResolved`.
         * @description
         *
         * How many RDNs were actually resolved via internal references
         * only. Needed when some RDNs were assumed correct from a cross
         * reference.
         *
         * @public
         * @readonly
         */
        readonly rdnsResolved: OPTIONAL<INTEGER>,
        /**
         * @summary `referenceType`.
         * @description
         *
         * Knowledge type used to generate this continuation. With
         * `returnToDUA` TRUE, may be `self`.
         *
         * @public
         * @readonly
         */
        readonly referenceType: ReferenceType,
        /**
         * @summary `accessPoints`.
         * @description
         *
         * SET OF AccessPointInformation. More than one item only for
         * NSSRs. Order insignificant.
         *
         * @public
         * @readonly
         */
        readonly accessPoints: AccessPointInformation[],
        /**
         * @summary `entryOnly`.
         * @description
         *
         * DEFAULT FALSE. TRUE iff original Search subset was oneLevel and
         * an alias was an immediate subordinate of baseObject. Completing
         * DSA evaluates only the named entry. Else absent or FALSE.
         *
         * @public
         * @readonly
         */
        readonly entryOnly?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `exclusions`.
         * @description
         *
         * Subordinate naming contexts the receiving DSA should not explore.
         * Same Exclusions rules (relative, SIZE (1..MAX); omit rather than
         * empty SET).
         *
         * @public
         * @readonly
         */
        readonly exclusions?: OPTIONAL<Exclusions>,
        /**
         * @summary `returnToDUA`.
         * @description
         *
         * DEFAULT FALSE. TRUE ⇒ unwilling to return data via an
         * intermediate DSA; DUA/LDAP client should bind directly
         * (DAP/LDAP). May set `referenceType` to `self`.
         *
         * @public
         * @readonly
         */
        readonly returnToDUA?: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nameResolveOnMaster`.
         * @description
         *
         * DEFAULT FALSE. Set when NSSRs were encountered. TRUE ⇒ remaining
         * RDNs from `nextRDNToBeResolved` shall not use copies (incl.
         * writeable copies); each remaining RDN at that entry's master.
         *
         * @public
         * @readonly
         */
        readonly nameResolveOnMaster?: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContinuationReference
     * @description
     *
     * This takes an `object` and converts it to a `ContinuationReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinuationReference`.
     * @returns {ContinuationReference}
     */
    public static _from_object(
        _o: { [_K in keyof ContinuationReference]: ContinuationReference[_K] }
    ): ContinuationReference {
        return new ContinuationReference(
            _o.targetObject,
            _o.aliasedRDNs,
            _o.operationProgress,
            _o.rdnsResolved,
            _o.referenceType,
            _o.accessPoints,
            _o.entryOnly,
            _o.exclusions,
            _o.returnToDUA,
            _o.nameResolveOnMaster,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `entryOnly`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_entryOnly(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `returnToDUA`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_returnToDUA(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `nameResolveOnMaster`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_nameResolveOnMaster(): BOOLEAN {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `referenceType`
     * @public
     * @static
     */

    public static _enum_for_referenceType = _enum_for_ReferenceType;
}

/**
 * @summary The Leading Root Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContinuationReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "targetObject",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "aliasedRDNs",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "operationProgress",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "rdnsResolved",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "referenceType",
        false,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "accessPoints",
        false,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "entryOnly",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "exclusions",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "returnToDUA",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        "nameResolveOnMaster",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
];

/**
 * @summary The Trailing Root Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContinuationReference: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ContinuationReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContinuationReference: $.ComponentSpec[] = [];

let _cached_decoder_for_ContinuationReference: $.ASN1Decoder<ContinuationReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinuationReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContinuationReference} The decoded data structure.
 */
export function _decode_ContinuationReference(el: _Element): ContinuationReference {
    if (!_cached_decoder_for_ContinuationReference) {
        _cached_decoder_for_ContinuationReference = function (
            el: _Element
        ): ContinuationReference {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let targetObject!: Name;
            let aliasedRDNs: OPTIONAL<INTEGER>;
            let operationProgress!: OperationProgress;
            let rdnsResolved: OPTIONAL<INTEGER>;
            let referenceType!: ReferenceType;
            let accessPoints!: AccessPointInformation[];
            let entryOnly: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_entryOnly;
            let exclusions: OPTIONAL<Exclusions>;
            let returnToDUA: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_returnToDUA;
            let nameResolveOnMaster: OPTIONAL<BOOLEAN> =
                ContinuationReference._default_value_for_nameResolveOnMaster;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                targetObject: (_el: _Element): void => {
                    targetObject = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                aliasedRDNs: (_el: _Element): void => {
                    aliasedRDNs = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                operationProgress: (_el: _Element): void => {
                    operationProgress = $._decode_explicit<OperationProgress>(
                        () => _decode_OperationProgress
                    )(_el);
                },
                rdnsResolved: (_el: _Element): void => {
                    rdnsResolved = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                referenceType: (_el: _Element): void => {
                    referenceType = $._decode_explicit<ReferenceType>(
                        () => _decode_ReferenceType
                    )(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<AccessPointInformation[]>(
                        () =>
                            $._decodeSetOf<AccessPointInformation>(
                                () => _decode_AccessPointInformation
                            )
                    )(_el);
                },
                entryOnly: (_el: _Element): void => {
                    entryOnly = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                exclusions: (_el: _Element): void => {
                    exclusions = $._decode_explicit<Exclusions>(
                        () => _decode_Exclusions
                    )(_el);
                },
                returnToDUA: (_el: _Element): void => {
                    returnToDUA = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                nameResolveOnMaster: (_el: _Element): void => {
                    nameResolveOnMaster = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContinuationReference,
                _extension_additions_list_spec_for_ContinuationReference,
                _root_component_type_list_2_spec_for_ContinuationReference,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContinuationReference(
                /* SET_CONSTRUCTOR_CALL */ targetObject,
                aliasedRDNs,
                operationProgress,
                rdnsResolved,
                referenceType,
                accessPoints,
                entryOnly,
                exclusions,
                returnToDUA,
                nameResolveOnMaster,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContinuationReference(el);
}

let _cached_encoder_for_ContinuationReference: $.ASN1Encoder<ContinuationReference> | null = null;

/**
 * @summary Encodes a(n) ContinuationReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinuationReference, encoded as an ASN.1 Element.
 */
export function _encode_ContinuationReference(
    value: ContinuationReference,
    elGetter: $.ASN1Encoder<ContinuationReference>
): _Element {
    if (!_cached_encoder_for_ContinuationReference) {
        _cached_encoder_for_ContinuationReference = function (
            value: ContinuationReference        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.DER
                            )(value.targetObject, $.DER),
                            /* IF_ABSENT  */ value.aliasedRDNs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.aliasedRDNs, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_OperationProgress,
                                $.DER
                            )(value.operationProgress, $.DER),
                            /* IF_ABSENT  */ value.rdnsResolved === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.DER
                                  )(value.rdnsResolved, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                4,
                                () => _encode_ReferenceType,
                                $.DER
                            )(value.referenceType, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                5,
                                () =>
                                    $._encodeSetOf<AccessPointInformation>(
                                        () => _encode_AccessPointInformation,
                                        $.DER
                                    ),
                                $.DER
                            )(value.accessPoints, $.DER),
                            /* IF_DEFAULT */ value.entryOnly === undefined ||
                            $.deepEq(
                                value.entryOnly,
                                ContinuationReference._default_value_for_entryOnly
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.entryOnly, $.DER),
                            /* IF_ABSENT  */ value.exclusions === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Exclusions,
                                      $.DER
                                  )(value.exclusions, $.DER),
                            /* IF_DEFAULT */ value.returnToDUA === undefined ||
                            $.deepEq(
                                value.returnToDUA,
                                ContinuationReference._default_value_for_returnToDUA
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.returnToDUA, $.DER),
                            /* IF_DEFAULT */ value.nameResolveOnMaster ===
                                undefined ||
                            $.deepEq(
                                value.nameResolveOnMaster,
                                ContinuationReference._default_value_for_nameResolveOnMaster
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.nameResolveOnMaster, $.DER),
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
    return _cached_encoder_for_ContinuationReference(value, elGetter);
}


/* eslint-enable */
